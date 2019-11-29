import * as path from "path";
import { app, BrowserWindow } from "electron";

function createWindow(): void {
  /* Options for the browserwindow being created, you can find them all here:
    http://electronjs.org/docs/api/browser-window#new-browserwindowoptions
  */

  const windowOptions = {
    title: app.name,
    width: 690,
    height: 300,
    frame: process.platform === "darwin",
    titleBarStyle: "hidden",
    backgroundColor: "#282A44",
    webPreferences: {
      preload: path.resolve(`${__dirname}/../dist/browser.js`), // Preload a script into the browser context
      nodeIntegration: true
    }
  };

  //@ts-ignore titleBarStyle has type issue
  // Define the browserWindow
  let win = new BrowserWindow(windowOptions);

  // Load the url
  win.loadURL("https://js-tldr.info/");
}

// Capture the ready event and create the window
app.on("ready", createWindow);
