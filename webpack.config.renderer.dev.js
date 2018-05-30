/* eslint global-require: 0, import/no-dynamic-require: 0 */
// Build config for development electron renderer process that uses HMR
import {existsSync} from "fs";
import {resolve, join} from "path";
import {spawn, execSync} from "child_process";
import webpack from "webpack";
import merge from "webpack-merge";
import baseConfig from "./webpack.config.base";

const port = process.env.PORT || 1212;
const dllPath = resolve(process.cwd(), "dll");
const publicPath = `http://localhost:${port}/dist`;
const manifestPath = resolve(dllPath, "renderer.json");

if (!isRequiredByDLLConfig()) {
  if (!(existsSync(dllPath) && existsSync(manifestPath))) {
    execSync("npm run build:dll");
  }
}

export default merge.smart(baseConfig, {
  mode: "development",
  target: "electron-renderer",
  devtool: "inline-source-map",

  entry: [
    "react-hot-loader/patch",
    `webpack-dev-server/client?http://localhost:${port}/`,
    "webpack/hot/only-dev-server",
    join(__dirname, "app/index.jsx")
  ],

  output: {
    publicPath: publicPath,
    filename: "renderer.dev.js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            plugins: [
              // Here, we include babel plugins that are only required for the
              // renderer process. The 'transform-*' plugins must be included
              // before react-hot-loader/babel
              "transform-class-properties",
              "transform-es2015-classes",
              "react-hot-loader/babel"
            ]
          }
        }
      },
      {
        test: /\.global\.(css|scss|sass)/,
        use: [
          {loader: "style-loader"},
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {loader: "sass-loader"}
        ]
      },
      {
        test: /^((?!\.global).)*\.(css|scss|sass)$/,
        use: [
          {loader: "style-loader"},
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: "url-loader"
      }
    ]
  },

  plugins: [
    isRequiredByDLLConfig()
      ? null
      : new webpack.DllReferencePlugin({
          context: process.cwd(),
          manifest: require(manifestPath),
          sourceType: "var"
        }),

    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin({multiStep: true}),
    new webpack.EnvironmentPlugin({NODE_ENV: "development"}),
    new webpack.LoaderOptionsPlugin({debug: true})
  ],

  node: {
    __dirname: false,
    __filename: false
  },

  devServer: {
    port: port,
    publicPath: publicPath,
    inline: true,
    lazy: false,
    hot: true,

    headers: {"Access-Control-Allow-Origin": "*"},
    contentBase: join(__dirname, "dist"),

    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100
    },

    historyApiFallback: {
      verbose: true,
      disableDotRule: false
    },

    before() {
      if (process.env.START_HOT) {
        console.log("Starting Main Process...");

        spawn("npm", ["run", "start:main"], {
          shell: true,
          env: process.env,
          stdio: "inherit"
        })
          .on("close", code => process.exit(code))
          .on("error", spawnError => console.error(spawnError));
      }
    }
  }
});

function isRequiredByDLLConfig() {
  return module.parent.filename.includes("webpack.config.renderer.dev.dll");
}
