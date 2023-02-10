import { defineStore } from 'pinia';

export const useThemeStore = defineStore('themeStore', {
    state: () => ({
        modeScheme: 'dark',
        modeIcon: 'off'
    }),
    getters: {

    },
    actions: {
        toggleMode() {
            (this.modeIcon === 'off') ? this.modeIcon = 'on' : this.modeIcon = 'off';
            (this.modeScheme === 'dark') ? this.modeScheme = 'light' : this.modeScheme = 'dark';
        }
    }
});