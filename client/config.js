const Store = require('electron-store');
const configStore = new Store();

/*  WINDOW POSITION 1/2

    Get the window's x and y coordinates
    from Electron's generated config.json file
    in the %AppData% directory.

    If there are no stored coordinates, 
    do nothing (center).

*/

function getWindowPosition() {
    const storedPosition = configStore.get('windowPosition');

    if (storedPosition) {
        return storedPosition
    } else return;
};

/* WINDOW POSITION 2/2

    Used within Electron's main.js file, 
    which watches the window for moved events,
    and provides an array of x and y coordinates,
    which are integers.

    When called, saves the new array to 
    the config.json file, overwriting the 
    previous array.

*/

function setWindowPosition(newPosition) {
    configStore.set('windowPosition', newPosition);
};

/* WINDOW SIZE 1/2

    Get the window's height and width from
    Electron's generated config.json file
    in the %AppData% directory.

    If there's no stored size, set the size
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

/* WINDOW SIZE 2/2

    Used within Electron's main.js file, 
    which watches the window for resize events,
    and provides a new value (window size).

    When called, saves the new size to the 
    config.json file, overwriting the previous size.

*/

function setWindowSize(newSize) {
    configStore.set('windowSize', newSize);
};

/* WINDOW MAXIMIZATION 1/2

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

/* WINDOW MAXIMIZATION 2/2

    Used within Electron's main.js file, 
    which watches the window for maximize
    and unmaximize events, and provides
    a new value (boolean).

    When called, saves the new state to the 
    config.json file, overwriting the previous state.

*/

function setMaximizedState(newState) {
    configStore.set('maximizedState', newState);
};

module.exports = {
    getWindowSize,
    setWindowSize,
    getMaximizedState,
    setMaximizedState,
    getWindowPosition,
    setWindowPosition
};