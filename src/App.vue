<template>
	<div id="app-content" :class="`mode-${ modeStore.modeTheme } theme-${ themeStore.colorTheme }`">
		<TitleBar />
		<div id="app-layout"></div>
	</div>
</template>

<script>
    import { useWinModeStore } from './stores/WinModeStore';
    import { useWinThemeStore } from './stores/WinThemeStore';
	
	import TitleBar from './components/TitleBar.vue';

	export default {
		components: {
            TitleBar
		},
		setup() {
			const themeStore = useWinThemeStore();
            const modeStore = useWinModeStore();
			return { themeStore, modeStore };
		}
	};
</script>