// @flow
import {app, Menu, shell, BrowserWindow} from "electron";

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu() {
    const template =
      process.platform === "darwin"
        ? this.buildDarwinTemplate()
        : this.buildDefaultTemplate();

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  buildDarwinTemplate() {
    const subMenuAbout = {
      label: "Electron",
      submenu: [
        {
          label: "About Electron",
          selector: "orderFrontStandardAboutPanel:"
        },
        {type: "separator"},
        {label: "Services", submenu: []},
        {type: "separator"},
        {
          label: "Hide Electron",
          accelerator: "Command+H",
          selector: "hide:"
        },
        {
          label: "Hide Others",
          accelerator: "Command+Shift+H",
          selector: "hideOtherApplications:"
        },
        {label: "Show All", selector: "unhideAllApplications:"},
        {type: "separator"},
        {
          label: "Quit",
          accelerator: "Command+Q",
          click: () => {
            app.quit();
          }
        }
      ]
    };
    const subMenuEdit = {
      label: "Edit",
      submenu: [
        {label: "Undo", accelerator: "Command+Z", selector: "undo:"},
        {label: "Redo", accelerator: "Shift+Command+Z", selector: "redo:"},
        {type: "separator"},
        {label: "Cut", accelerator: "Command+X", selector: "cut:"},
        {label: "Copy", accelerator: "Command+C", selector: "copy:"},
        {label: "Paste", accelerator: "Command+V", selector: "paste:"},
        {
          label: "Select All",
          accelerator: "Command+A",
          selector: "selectAll:"
        }
      ]
    };
    const subMenuView = {
      label: "View",
      submenu: [
        {
          label: "Toggle Full Screen",
          accelerator: "Ctrl+Command+F",
          click: () => {
            this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
          }
        }
      ]
    };
    const subMenuWindow = {
      label: "Window",
      submenu: [
        {
          label: "Minimize",
          accelerator: "Command+M",
          selector: "performMiniaturize:"
        },
        {label: "Close", accelerator: "Command+W", selector: "performClose:"},
        {type: "separator"},
        {label: "Bring All to Front", selector: "arrangeInFront:"}
      ]
    };

    return [subMenuAbout, subMenuEdit, subMenuView, subMenuWindow];
  }

  buildDefaultTemplate() {
    const templateDefault = [
      {
        label: "&File",
        submenu: [
          {
            label: "&Open",
            accelerator: "Ctrl+O"
          },
          {
            label: "&Close",
            accelerator: "Ctrl+W",
            click: () => {
              this.mainWindow.close();
            }
          }
        ]
      },
      {
        label: "&View",
        submenu: [
          {
            label: "Toggle &Full Screen",
            accelerator: "F11",
            click: () => {
              this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
            }
          }
        ]
      }
    ];

    return templateDefault;
  }
}
