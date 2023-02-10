<template>
	<div id="app-content" :class="`mode-${ themeStore.modeTheme } theme-${ themeStore.colorTheme }`">
		<TitleBar />
		<div id="app-layout"></div>
	</div>
</template>

<script>
	import { useThemeStore } from './stores/ThemeStore';
	import TitleBar from './components/TitleBar.vue';

	export default {
		components: {
            TitleBar
		},
		setup() {
			const themeStore = useThemeStore();
			return { themeStore };
		}
	};
</script>