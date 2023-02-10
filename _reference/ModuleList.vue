<template>
    <section :ref="heading">
        <div class="sidebar-heading">
            <h2>{{ heading }}</h2>
        </div>
        <ul class="sidebar-list">
            <li v-for="option in options">
                <i :class="option.icon"></i>
                <span>{{ option.module }}</span>
            </li>
        </ul>
        <div class="sidebar-toggle">
            <button @click="toggleCrop">
                <!-- {{ toggleList }} -->
                Show more
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            heading: String,
            options: Array
        },
        data() {
            return {
                moduleCount: null
            }
        },
        methods: {
            countModules() {
                console.log(this.$refs)
            }
        },
        mounted() {
            this.countModules();
        }
    }
</script>