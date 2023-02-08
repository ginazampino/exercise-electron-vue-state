<template>
    <nav id="sidebar">
        <SideBarPlanner></SideBarPlanner>
        <SideBarWorkspace></SideBarWorkspace>
        <SideBarProject></SideBarProject>
    </nav>
</template>

<script>
    import SideBarPlanner from './sidebar/SideBarPlanner.vue';
    import SideBarWorkspace from './sidebar/SideBarWorkspace.vue';
    import SideBarProject from './sidebar/SideBarProject.vue';

    export default {
        components: {
            SideBarPlanner,
            SideBarWorkspace,
            SideBarProject
		}
    };
</script>