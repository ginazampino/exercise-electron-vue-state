const Store = require('electron-store');
const configStore = new Store();

/*

    Get the window's height and width from
    the Electron's generated config.json file
    in the %AppData% directory.

    If there's no stored value, set the value
    to the default value (1024 x 768).

*/

function getWindowSize() {
    const defaultSize = [1024, 768];
    const storedSize = configStore.get('windowSize');

    if (storedSize) {
        return storedSize;
    } else {
        configStore.set('windowSize', defaultSize);
        return defaultSize;
    };
};

/*

    Used within Electron's main.js file, 
    which watches the window for resize events,
    and provides a new value (window size).

    Saves the new value to the config.json file, 
    overwriting the previous value.

*/

function setWindowSize(newSize) {
    configStore.set('windowSize', newSize);
};

/*

    Get the (un)maximized state from
    Electron's generated config.json file
    in the %AppData% directory.

    If no stored value, set the value to the 
    default value of false (unmaximized).

*/

function getMaximizedState() {
    const defaultState = false;
    const storedState = configStore.get('maximizedState');

    if (storedState) {
        return storedState;
    } else {
        configStore.set('maximizedState', defaultState);
        return defaultState;
    };
};

/*

    Used within Electron's main.js file, 
    which watches the window for maximize
    and unmaximize events, and provides
    a new boolean value.

    Saves the new value to the config.json file, 
    overwriting the previous value.

*/

function setMaximizedState(newState) {
    configStore.set('maximizedState', newState);
};

module.exports = {
    getWindowSize,
    setWindowSize,
    getMaximizedState,
    setMaximizedState
};