// Webpack config for production electron main process
import {EnvironmentPlugin} from "webpack";
import merge from "webpack-merge";
import UglifyJSPlugin from "uglifyjs-webpack-plugin";
import baseConfig from "./webpack.config.base";

export default merge.smart(baseConfig, {
  mode: "production",
  entry: "./app/main.dev.js",
  target: "electron-main",
  devtool: "source-map",

  output: {
    path: __dirname,
    filename: "./app/main.prod.js"
  },

  node: {
    __dirname: false,
    __filename: false
  },

  plugins: [
    new UglifyJSPlugin({
      parallel: true,
      sourceMap: true
    }),

    new EnvironmentPlugin({
      NODE_ENV: "production"
    })
  ]
});
