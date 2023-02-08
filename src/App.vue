<template>
	<div id="app-content" :class="`theme-${colorMode} accent-${accentColor}`">
		<TitleBar @toggle-mode="toggleMode" @toggle-color="toggleColor"></TitleBar>
		<div id="app-layout">
			<SideBar></SideBar>
			<main id="content-reader">
            </main>
		</div>
	</div>
</template>

<script>
	import TitleBar from './components/shared/TitleBar.vue';
	import SideBar from './components/shared/SideBar.vue';

	export default {
        components: {
            TitleBar,
			SideBar
		},
		data() {
			return {
				colorMode: 'dark',
				accentColor: 'undefined'
			}
		},
		methods: {
			toggleMode() {
				(this.colorMode === 'dark') ? this.colorMode = 'light' : this.colorMode = 'dark';
			},
			toggleColor() {
				const accentArray = ['blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'green'];
				const currentColor = accentArray.indexOf(this.accentColor);

				this.accentColor = accentArray.at(currentColor + 1);
			}
		}
	};
</script>