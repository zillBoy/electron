import { Tray, Menu, app, BrowserWindow } from "electron";
import path from 'path';
import { getAssetPath } from "./pathResolver.js";

export function createTray(mainWindow: BrowserWindow) {
  const tray = new Tray(path.join(getAssetPath(), 'icon@3x.png'));
  
  tray.setToolTip('My Electron App');
  tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: 'Show',
      click: () => {
        mainWindow.show();
        if (app.dock) {
          app.dock.show();
        }
      }
    },
    {
      label: 'Quit',
      click: () => app.quit(),
    },
  ]))
}