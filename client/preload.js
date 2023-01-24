const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
    function invokeCommand(command) {
        document.getElementById(command).addEventListener('click', () => {
            ipcRenderer.invoke(command);
        });
    };

    invokeCommand('quit-app');
    invokeCommand('minimize-app');
    invokeCommand('maximize-app');
});