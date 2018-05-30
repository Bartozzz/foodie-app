import {join} from "path";
import {execSync} from "child_process";
import {existsSync} from "fs";
import {dependencies} from "../../app/package.json";

(function() {
  const deps = Object.keys(dependencies || {});
  const appPath = join(__dirname, "..", "..", "app");
  const nodeModules = join(appPath, "node_modules");

  if (deps.length > 0 && existsSync(nodeModules)) {
    const electronRebuildCmd =
      "../node_modules/.bin/electron-rebuild --parallel --force --types prod,dev,optional --module-dir .";

    const cmd =
      process.platform === "win32"
        ? electronRebuildCmd.replace(/\//g, "\\")
        : electronRebuildCmd;

    execSync(cmd, {
      cwd: appPath
    });
  }
})();
