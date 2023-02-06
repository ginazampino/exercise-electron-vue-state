const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');

app.disableHardwareAcceleration();

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1024,
        height: 768,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }   
    });

    // Load application from server:
    window.loadURL('http://localhost:5173/');
    
    // Handle application controls:
    ipcMain.handle('quit-app', () => {
        app.quit();
    });

    ipcMain.handle('minimize-app', () => {
        window.minimize();
    });

    ipcMain.handle('maximize-app', () => {
        const isMax = window.isMaximized();

        isMax ? window.unmaximize() : window.maximize();
    });

    // Open browser dev tools on start:
    window.webContents.openDevTools();
};

app.whenReady().then(() => {
    createWindow();

    // Mac compatibility:
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Mac compatibility:
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});