const Store = require('electron-store');
const settingsStore = new Store();

function getWindowSize() {
    const defaultSize = [1024, 768];
    const savedSize = settingsStore.get('windowSize');

    if (savedSize) {
        return savedSize;
    } else {
        settingsStore.set('windowSize', defaultSize);
        return defaultSize;
    };
};

function setWindowSize(newSize) {
    settingsStore.set('windowSize', newSize);
};

module.exports = {
    getWindowSize,
    setWindowSize
};