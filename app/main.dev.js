/**
 * This module executes inside of electron's main process. You can start the
 * renderer process from here and communicate with the other processes through
 * IPC. This file will be compiled to `./app/main.prod.js` using webpack. This
 * gives us some performance wins.
 *
 * eslint flowtype-errors/show-errors: 0
 * eslint global-require: 0
 * @flow
 */

import {join} from "path";
import {app, BrowserWindow} from "electron";
import MenuBuilder from "./menu/buildMenu";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, menuBuilder;

if (process.env.NODE_ENV === "development") {
  require("electron-debug")();
  require("module").globalPaths.push(join(__dirname, "../app", "node_modules"));
}

const installExtensions = async () => {
  const installer = require("electron-devtools-installer");
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ["REACT_DEVELOPER_TOOLS", "REDUX_DEVTOOLS"];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

const createWindow = async () => {
  if (process.env.NODE_ENV === "development") {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({show: false});
  menuBuilder = new MenuBuilder(mainWindow);

  menuBuilder.buildMenu();
  mainWindow.loadURL(`file://${__dirname}/app.html`);

  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows in an
    // array if your app supports multi windows, this is the time when you
    // should delete the corresponding element:
    mainWindow = null;
  });

  mainWindow.once("ready-to-show", () => {
    if (mainWindow) {
      mainWindow.show();
      mainWindow.focus();
    }
  });
};

// This method will be called when Electron has finished initialization and is
// ready to create browser windows. Some APIs can only be used after this event
// occurs.
app.on("ready", async () => await createWindow());

// Respect the OSX convention of having the application in memory even after all
// windows have been closed. On OS X it is common for applications and their
// menu bar to stay active until the user quits explicitly with CMD + Q:
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// On OS X it's common to re-create a window in the app when the dock icon is
// clicked and there are no other windows open:
app.on("activate", async () => {
  if (mainWindow === null) {
    await createWindow();
  }
});
