<template>
    <div>
        <app-header></app-header>
        <app-content-add></app-content-add>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import ContentMore from './components/ContentAdd.vue';

    export default {
        components: {
            'app-content-add': ContentMore
        }
    }
</script>

<style scoped>
</style>