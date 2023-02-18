<template>
    <nav id="sidebar">
        <SideBarPlanner />
        <SideBarWorkspace />
    </nav>
</template>

<script>
    import SideBarPlanner from './navigation/SideBarPlanner.vue';
    import SideBarWorkspace from './navigation/SideBarWorkspace.vue';

    export default {
        components: {
            SideBarPlanner,
            SideBarWorkspace
        }
    }
</script>