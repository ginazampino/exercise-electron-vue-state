<template>
  <header id="titlebar">
        <ul id="sidebar-controls">
            <li id="toggle-sidebar">
                <i class="fa-regular fa-arrow-left-to-line"></i>
            </li>
        </ul>
        <div id="titlebar-title" class="draggable">
            <i class="fa-regular fa-stars"></i>
            <h1>
                Concetto
            </h1>
        </div>
        <ul id="titlebar-controls">
            <li id="toggle-mode" @click="modeStore.toggleMode">
                <i :class="`fa-regular fa-toggle-${ modeStore.modeIcon }`"></i>
            </li>
            <li id="toggle-color" @click="themeStore.toggleColor">
                <i class="fa-regular fa-paint-roller"></i>
            </li>
            <li id="minimize-app">
                <i class="fa-regular fa-minus"></i>
            </li>
            <li id="maximize-app">
                <i class="fa-regular fa-expand"></i>
            </li>
            <li id="quit-app">
                <i class="fa-regular fa-xmark"></i>
            </li>
        </ul>
    </header>
</template>

<script>
    import { useWinModeStore } from '../stores/WinModeStore';
    import { useWinThemeStore } from '../stores/WinThemeStore';

    export default {
        setup() {
            const themeStore = useWinThemeStore();
            const modeStore = useWinModeStore();
			return { themeStore, modeStore };
        }
    };
</script>