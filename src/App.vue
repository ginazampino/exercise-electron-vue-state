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
				accentColor: 'none'
			}
		},
		methods: {
			toggleMode() {
				(this.colorMode === 'dark') ? this.colorMode = 'light' : this.colorMode = 'dark';
			},
			toggleColor() {
				switch (this.accentColor) {
					case 'none':
						this.accentColor = 'blue'
						break;
					case 'blue':
						this.accentColor = 'purple'
						break;
					case 'purple':
						this.accentColor = 'green'
						break;
					case 'green':
						this.accentColor = 'pink';
						break;
					case 'pink':
						this.accentColor = 'none';
						break;
					default:
						this.accentColor = 'none';
				}
			}
		}
	};
</script>