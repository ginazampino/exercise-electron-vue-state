<template>
	<div id="electron-content" :class="`mode-${ modeStore.modeTheme } theme-${ themeStore.colorTheme }`">
		<TitleBar />
		<div id="electron-layout">
			<SideBar />
            <MainBrowser />
		</div>
	</div>
</template>

<script>
    import { useWinModeStore } from './stores/WinModeStore';
    import { useWinThemeStore } from './stores/WinThemeStore';
	
	import TitleBar from './components/TitleBar.vue';
	import SideBar from './components/SideBar.vue';
	import MainBrowser from './components/MainBrowser.vue';

	export default {
		components: {
            TitleBar,
			SideBar,
			MainBrowser
		},
		setup() {
			const themeStore = useWinThemeStore();
            const modeStore = useWinModeStore();
			return { themeStore, modeStore };
		}
	};
</script>