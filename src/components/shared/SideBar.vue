<template>
    <nav id="sidebar">
        <ModuleList v-bind="planner"></ModuleList>
        <ModuleList v-bind="workspace"></ModuleList>
        <ModuleList v-bind="project"></ModuleList>
        <ModuleList v-bind="material"></ModuleList>
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
                    heading: '',
                    options: [
                        {module: 'Inbox', icon: 'fa-solid fa-inbox-in'}, 
                        {module: 'Actions', icon: 'fa-solid fa-bolt'}
                    ]
                },
                workspace: {
                    heading: 'Workspace',
                    options: [
                        {module: 'Inbox', icon: 'fa-solid fa-inbox-in'}, 
                        {module: 'Actions', icon: 'fa-solid fa-bolt'}
                    ]
                },
                project: {
                    heading: 'Project'
                },
                material: {
                    heading: 'Material'
                }
            }
        }
    }
</script>