<template>
    <header id="titlebar">
        <ul id="sidebar-controls">
            <li id="toggle-sidebar">
                
            </li>
        </ul>
        <div id="titlebar-title" class="draggable">
            <h1>
                Concetto
            </h1>
        </div>
        <ul id="titlebar-controls">
            <li id="toggle-mode" @click="toggleMode">
                <img :src="getToggleStatus(toggleStatus)"/>
            </li>
            <li id="minimize-app">
                <img src="../../assets/icons/minus.svg" />
            </li>
            <li id="maximize-app">
                <img src="../../assets/icons/maximize.svg" />
            </li>
            <li id="quit-app">
                <img src="../../assets/icons/x.svg" />
            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                toggleStatus: 'left'
            }
        },
        methods: {
            toggleModeIcon() {
                (this.toggleStatus === 'left') ? this.toggleStatus = 'right' : this.toggleStatus = 'left';
            },
            toggleMode() {
                this.toggleModeIcon();
                this.$emit('toggle-mode');
            },
            getToggleStatus(status) {
                return '/src/assets/icons/toggle-' + status + '.svg';
            }
        }
    };
</script>