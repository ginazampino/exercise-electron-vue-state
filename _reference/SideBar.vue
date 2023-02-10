<template>
    <nav id="sidebar">
        <ModuleList v-bind="planner"></ModuleList>
        <ModuleList v-bind="workspace"></ModuleList>
    </nav>
</template>

<script>
    import ModuleList from './ModuleList.vue';

    export default {
        components: {
            ModuleList
        },
        data() {
            return {
                planner: {
                    heading: 'Planner',
                    options: [
                        {module: 'Inbox', icon: 'fa-solid fa-inbox-in'}, 
                        {module: 'Actions', icon: 'fa-solid fa-bolt'},
                        {module: 'Pending', icon: 'fa-solid fa-snooze'},
                        {module: 'Plans', icon: 'fa-solid fa-square-list'},
                        {module: 'Ideas', icon: 'fa-solid fa-thought-bubble'},
                        {module: 'Archive', icon: 'fa-solid fa-box-archive'}
                    ]
                },
                workspace: {
                    heading: 'Workspace',
                    options: [
                        {module: 'Inbox', icon: 'fa-solid fa-inbox-in'}, 
                        {module: 'Actions', icon: 'fa-solid fa-bolt'}
                    ]
                }
            }
        }
    }
</script>