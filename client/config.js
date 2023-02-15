const Store = require('electron-store');
const configStore = new Store();

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

function setWindowSize(newSize) {
    configStore.set('windowSize', newSize);
};

module.exports = {
    getWindowSize,
    setWindowSize
};