// Base webpack config used across other specific configs
import {join} from "path";
import {existsSync, readFileSync} from "fs";
import {NamedModulesPlugin, EnvironmentPlugin} from "webpack";
import {dependencies as externals} from "./app/package.json";
import {dependencies as possibleExternals} from "./package.json";

export default {
  output: {
    path: join(__dirname, "app"),
    libraryTarget: "commonjs2"
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [join(__dirname, "app"), "node_modules"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {loader: "babel-loader"}
      }
    ]
  },

  externals: [
    ...Object.keys(externals || {}),
    ...Object.keys(possibleExternals || {}).filter(filterDepWithoutEntryPoints)
  ],

  plugins: [
    new NamedModulesPlugin(),
    new EnvironmentPlugin({NODE_ENV: "production"})
  ]
};

/**
 * Finds all the dependencies without a `main` property and add them as Webpack
 * externals.
 *
 * @param   {string}    dep
 * @return  {boolean}   Returns true if we want to add a dependency to externals
 */
export function filterDepWithoutEntryPoints(dep) {
  try {
    const nodeModules = join(__dirname, `node_modules/${dep}`);

    if (existsSync(join(nodeModules, "index.js"))) {
      return false;
    }

    const pgkStr = readFileSync(join(nodeModules, "package.json")).toString();
    const pkgJson = JSON.parse(pgkStr);
    const fields = ["main", "module", "jsnext:main", "browser"];

    return !fields.some(field => field in pkgJson);
  } catch (error) {
    return true;
  }
}
