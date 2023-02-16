const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const { 
    getWindowSize, 
    setWindowSize, 
    getMaximizedState, 
    setMaximizedState,
    setWindowPosition,
    getWindowPosition
} = require('./config');

app.disableHardwareAcceleration();

const createWindow = () => {
    const windowSize = getWindowSize();

    const window = new BrowserWindow({
        width: windowSize[0],
        height: windowSize[1],
        minWidth: 1024,
        minHeight: 720,
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

    // Handle min/max toggling:
    window.on('maximize', () => {
        setMaximizedState(true);
    });

    window.on('unmaximize', () => {
        setMaximizedState(false);
    });

    /*

        Executed on initial creation of the 
        Electron window.

        Gets the last recorded boolean value
        of the window's maximization state.

        NOTE: If this becomes out-of-sync
        with front-end Pinia stores, the 
        expand/compress icons in the titlebar 
        won't match the window's actual state.

    */

    function handleMaximize() {
        const maximized = getMaximizedState();

        if (maximized) {
            window.maximize();
        } else {
            window.unmaximize();
        };
    };

    handleMaximize();

    // Handle window repositioning:
    window.on('moved', () => {
        setWindowPosition(window.getPosition());
    });

    /*

        Executed on initial creation of the 
        Electron window.

        Gets the last recorded array indicating
        the window's previous x and y coordinates.

        If no array, then do nothing (center).

    */

    function handlePosition() {
        const position = getWindowPosition();

        if (position) {
            window.setPosition(position[0], position[1]);
        } else return;
    };

    handlePosition();
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