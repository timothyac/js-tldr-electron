import { ipcRenderer as ipc } from "electron";
import elementReady = require("element-ready");

// Use an IFFE to run the script on load
(async function testes() {
  console.log("Preloaded browser script");

  // Wait until element is shown in the DOM
  const header = (await elementReady<HTMLElement>("header", {
    stopOnDomReady: false
  }))!;

  // Assign drag styles to header
  // header.style["-webkit-user-select"] = "none";
  header.style["-webkit-app-region"] = "drag";
})();
