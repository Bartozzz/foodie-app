import {readdirSync, existsSync} from "fs";
import {execSync} from "child_process";
import {dependencies} from "../../package.json";

(function() {
  if (!dependencies) return;

  const deps = Object.keys(dependencies);
  const native = readdirSync("node_modules").filter(dir =>
    existsSync(`node_modules/${dir}/binding.gyp`)
  );

  try {
    // Find the reason for why the dependency is installed. If it is installed
    // because of a devDependency then that is okay. Warn when it is installed
    // because of a dependency
    const depsJson = JSON.parse(
      execSync(`npm ls ${native.join(" ")} --json`).toString()
    );
    const rootDeps = Object.keys(depsJson.dependencies);
    const filtered = rootDeps.filter(dep => deps.includes(dep));

    if (filtered.length > 0) {
      console.log(`
Webpack does not work with native dependencies:
${filtered.join(", ")}

are native dependencies and should be installed inside of the "./app" folder.
First uninstall the packages from "./package.json", then, install the package
to "./app/package.json".
`);

      process.exit(1);
    }
  } catch (error) {
    console.log("Native dependencies could not be checked");
  }
})();
