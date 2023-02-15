import { defineStore } from 'pinia';

export const useWinModeStore = defineStore('winModeStore', {
    state: () => ({
        modeTheme: 'dark',
        modeIcon: 'off'
    }),
    actions: {
        toggleMode() {
            this.modeIcon === 'off' ? this.modeIcon = 'on' : this.modeIcon = 'off';
            this.modeTheme === 'dark' ? this.modeTheme = 'light' : this.modeTheme = 'dark';
        }
    },
    persist: true
});