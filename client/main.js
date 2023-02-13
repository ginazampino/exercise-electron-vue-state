const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const { getWindowSize, setWindowSize } = require('./settings');

app.disableHardwareAcceleration();

const createWindow = () => {
    const windowSize = getWindowSize();

    const window = new BrowserWindow({
        width: windowSize[0],
        height: windowSize[1],
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

    // Handle window resizing:
    window.on('resized', () => {
        setWindowSize(window.getSize());
    });
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