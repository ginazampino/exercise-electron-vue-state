import { defineStore } from 'pinia';

export const useWinScreenStore = defineStore('winScreenStore', {
    state: () => ({
        screenIcon: 'expand',
        screenText: 'Maximize'
    }),
    actions: {

        /*

            NOTE: If this action becomes out-of-sync with 
            the back-end Electron store, the expand/compress
            icons won't match the window's actual state.

        */

        toggleScreen() {
            this.screenIcon === 'expand' ? this.screenIcon = 'compress' : this.screenIcon = 'expand';
            this.screenText === 'Maximize' ? this.screenText = 'Minimize' : this.screenText = 'Maximize';
        }
    },
    persist: true
});