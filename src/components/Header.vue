<template>
    <div id="header">
        <nav class="fixed-top site-header">
            <div class="mx-auto" style="width: 70%;">
                <router-link class="py-1 px-4 d-md-inline-block" tag="li" :to="{name: 'ctg', params: { ctg: 'all' }}">Все</router-link>
                <!-- Навигация по категриям -->
                <router-link class="py-1 px-4 d-md-inline-block" tag="li" v-for="item in arr" :to="{name: 'ctg', params: { ctg: item }}">{{ item }}</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                animals: animals,
            }
        },
        computed: {
            arr() {
                // получаем все категории
                return this.$store.getters.getCategory;
            }
        }
    }
</script>

<style scoped>
    #header {
        padding: 20px;
        color: #E2E2E2;
        font-size: 20px;
        font-weight: bold;
    }

    nav {
        border-bottom: 3px solid #007ACC;
        background: #2D2D30;
    }

    nav li {
        line-height: 30px;
    }

    nav li:hover {
        background: #1C97EA;
        cursor: pointer;
    }

    nav li.router-link-exact-active {
        background-color: #007ACC;
    }
        
</style>