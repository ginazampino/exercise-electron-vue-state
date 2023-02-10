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
            <li id="toggle-mode" @click="themeStore.toggleMode">
                <i :class="`fa-regular fa-toggle-${themeStore.modeIcon}`"></i>
            </li>
        </ul>
    </header>
</template>

<script>
    import { ref } from 'vue'
    import { useThemeStore } from '../stores/ThemeStore';

    export default {
        setup() {
            const themeStore = useThemeStore();
			return { themeStore };
        }
    };
</script>