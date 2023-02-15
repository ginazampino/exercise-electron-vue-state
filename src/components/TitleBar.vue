<template>
  <header id="titlebar">
        <ul id="sidebar-controls">
            <li>
                <button id="toggle-sidebar" aria-label="Toggle sidebar">
                    <i class="fa-regular fa-arrow-left-to-line" alt="Left arrow icon"></i>
                </button>
            </li>
        </ul>
        <div id="titlebar-title" class="draggable" aria-label="Move window">
            <i class="fa-regular fa-stars" alt="Stars icon"></i>
            <h1>
                Concetto
            </h1>
        </div>
        <ul id="titlebar-controls">
            <li>
                <button id="toggle-mode" @click="modeStore.toggleMode" aria-label="Toggle brightness">
                    <i :class="`fa-regular fa-toggle-${ modeStore.modeIcon }`" alt="Switch icon"></i>
                </button>
            </li>
            <li>
                <button id="toggle-color" @click="themeStore.toggleColor" aria-label="Toggle theme">
                    <i class="fa-regular fa-paint-roller" alt="Paint roller icon"></i>
                </button>
            </li>
            <li>
                <button id="minimize-app" aria-label="Minimize window">
                    <i class="fa-regular fa-minus" alt="Minus icon"></i>
                </button>
            </li>
            <li>
                <button id="maximize-app" @click="screenStore.toggleScreen" :aria-label="`${ screenStore.screenText } window`">
                    <i :class="`fa-regular fa-${ screenStore.screenIcon }`" :alt="`${ screenStore.screenText } icon`"></i>
                </button>
            </li>
            <li>
                <button id="quit-app" aria-label="Quit application">
                    <i class="fa-regular fa-xmark" alt="Close icon"></i>
                </button>
            </li>
        </ul>
    </header>
</template>

<script>
    import { useWinModeStore } from '../stores/WinModeStore';
    import { useWinThemeStore } from '../stores/WinThemeStore';
    import { useWinScreenStore } from '../stores/WinScreenStore';

    export default {
        setup() {
            const themeStore = useWinThemeStore();
            const modeStore = useWinModeStore();
            const screenStore = useWinScreenStore();
			return { themeStore, modeStore, screenStore };
        }
    };
</script>