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
                Toggle mode
            </li>
            <li id="minimize-app">

            </li>
            <li id="maximize-app">
                
            </li>
            <li id="quit-app">

            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                toggleStatus: 'off'
            }
        },
        methods: {
            toggleModeIcon() {

            },
            toggleMode() {
                this.$emit('toggle-mode');
            }
        }
    };
</script>