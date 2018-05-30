// Check if the renderer and main bundles are built
import {join} from "path";
import {existsSync} from "fs";

(function() {
  const appPath = join(__dirname, "..", "..", "app");
  const mainPath = join(appPath, "main.prod.js");
  const rendererPath = join(appPath, "dist", "renderer.prod.js");

  if (!existsSync(mainPath)) {
    throw new Error(
      "Main process not built. Build it by running 'npm run build:main'"
    );
  }

  if (!existsSync(rendererPath)) {
    throw new Error(
      "Renderer process not built. Build it by running 'npm run build:renderer'"
    );
  }
})();
