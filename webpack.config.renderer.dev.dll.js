/* eslint global-require: 0, import/no-dynamic-require: 0 */
// Builds the DLL for development electron renderer process
import {join, resolve} from "path";
import {DllPlugin, EnvironmentPlugin, LoaderOptionsPlugin} from "webpack";
import merge from "webpack-merge";
import baseConfig from "./webpack.config.base";
import {dependencies} from "./package.json";

const dist = resolve(process.cwd(), "dll");

export default merge.smart(baseConfig, {
  mode: "development",
  target: "electron-renderer",
  module: require("./webpack.config.renderer.dev").module,
  devtool: "eval",

  context: process.cwd(),
  externals: ["fsevents", "crypto-browserify"],

  entry: {
    renderer: Object.keys(dependencies || {})
  },

  output: {
    library: "renderer",
    path: dist,
    filename: "[name].dev.dll.js",
    libraryTarget: "var"
  },

  plugins: [
    new DllPlugin({
      path: join(dist, "[name].json"),
      name: "[name]"
    }),

    new EnvironmentPlugin({
      NODE_ENV: "development"
    }),

    new LoaderOptionsPlugin({
      debug: true,
      options: {
        context: resolve(process.cwd(), "app"),
        output: {
          path: resolve(process.cwd(), "dll")
        }
      }
    })
  ]
});
