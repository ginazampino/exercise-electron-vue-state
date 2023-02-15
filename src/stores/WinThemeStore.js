import { defineStore } from 'pinia';

export const useWinThemeStore = defineStore('winThemeStore', {
    state: () => ({
        colorArray: ['blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'green'],
        colorTheme: 'undefined'
    }),
    actions: {
        toggleColor() {
            const currentTheme = this.colorArray.indexOf(this.colorTheme);
            this.colorTheme = this.colorArray.at(currentTheme + 1);
        }
    },
    persist: true
});
