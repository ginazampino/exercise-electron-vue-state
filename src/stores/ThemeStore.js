import { defineStore } from 'pinia';

export const useThemeStore = defineStore('themeStore', {
    state: () => ({
        colorArray: ['blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'green'],
        colorTheme: 'undefined',
        modeTheme: 'dark',
        modeIcon: 'off'
    }),
    getters: {

    },
    actions: {
        toggleMode() {
            this.modeIcon === 'off' ? this.modeIcon = 'on' : this.modeIcon = 'off';
            this.modeTheme === 'dark' ? this.modeTheme = 'light' : this.modeTheme = 'dark';
        },
        toggleColor() {
            const currentTheme = this.colorArray.indexOf(this.colorTheme);
            this.colorTheme = this.colorArray.at(currentTheme + 1);
        }
    }
});