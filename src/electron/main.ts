import { app, BrowserWindow, Tray } from 'electron'
import path from 'path';
import { ipcMainHandle, isDev } from './util.js';
import { getStaticData, pollResources } from './resourceManager.js';
import { getAssetPath, getPreloadPath, getUIPath } from './pathResolver.js';

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: getPreloadPath(),
    },
  })

  if (isDev()) {
    mainWindow.loadURL('http://localhost:5123')
  } else {
    mainWindow.loadFile(getUIPath())
  }

  pollResources(mainWindow);

  ipcMainHandle('getStaticData', () => {
    return getStaticData();
  })

  new Tray(path.join(getAssetPath(), 'icon@3x.png')).setToolTip('My Electron App')
});