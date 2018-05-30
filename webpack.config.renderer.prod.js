// Build config for electron renderer process
import path from "path";
import {EnvironmentPlugin} from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import UglifyJSPlugin from "uglifyjs-webpack-plugin";
import merge from "webpack-merge";
import baseConfig from "./webpack.config.base";

export default merge.smart(baseConfig, {
  devtool: "source-map",
  mode: "production",
  target: "electron-renderer",
  entry: "./app/index.jsx",

  output: {
    path: path.join(__dirname, "app/dist"),
    publicPath: "./dist/",
    filename: "renderer.prod.js"
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
            plugins: ["transform-class-properties", "transform-es2015-classes"]
          }
        }
      },
      {
        test: /\.global\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: "css-loader", options: {minimize: true}},
            {loader: "sass-loader"}
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /^((?!\.global).)*\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                minimize: true,
                importLoaders: 1,
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            },
            {loader: "sass-loader"}
          ]
        })
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
    new ExtractTextPlugin("style.css"),
    new EnvironmentPlugin({NODE_ENV: "production"}),
    new UglifyJSPlugin({parallel: true, sourceMap: true})
  ]
});
