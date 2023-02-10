import { defineStore } from 'pinia';

export const useThemeStore = defineStore('themeStore', {
    state: () => ({
        modeIcon: 'off'
    }),
    getters: {
        getMode() {
            return this.modeIcon;
        }
    },
    actions: {
        toggleMode() {
            (this.modeIcon === 'off') ? this.modeIcon = 'on' : this.modeIcon = 'off';
        }
    }
});