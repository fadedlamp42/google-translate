const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  //load translate.google.com
  win.loadURL("https://translate.google.com/#view=home&op=translate&sl=en&tl=zh-CN")

  //hide menu bar but make usable with alt
  win.setMenuBarVisibility(false)
  win.setAutoHideMenuBar(true)

  //tidy up unsightly elements for a desktop version
  win.webContents.executeJavaScript('document.getElementById("gb").remove()')                       //remove header bar
  win.webContents.executeJavaScript('document.getElementsByClassName("feedback-link")[0].remove()') //remove feedback bar
  win.webContents.executeJavaScript('document.getElementsByClassName("gp-footer")[0].remove()')     //remove icon bar
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
