<template>
	<div id="app-content" :class="`theme-${colorMode}`">
		<TitleBar @toggle-mode="toggleMode"></TitleBar>
	</div>
</template>

<script>
	import TitleBar from './components/shared/TitleBar.vue';

	export default {
        components: {
            TitleBar
		},
		data() {
			return {
				colorMode: 'dark'
			}
		},
		methods: {
			toggleMode() {
				(this.colorMode === 'dark') ? this.colorMode = 'light' : this.colorMode = 'dark';
			}
		}
	};
</script>