<template>
    <div class="mx-auto" style="width: 70%;">
        <ol>
            <li class="media mt-4" v-for="animal in animals" v-if="animal.ctg == ctg || ctg == 'all'">
                <img class="align-self-center mr-3" :src="animal.image" width="190" height="150" @error="nopicture"  />
                <div class="media-body">
                    <router-link :to="{name: 'dtl', params: { title: animal.title }}">{{ animal.title }}</router-link>
                    <p>{{ animal.text | snippet }}</p>
                    <h5>Категория: {{ animal.ctg }}</h5>
                </div>
            </li>
        </ol>

        <div class="text-center mb-5">
            <button class="btn btn-light" v-on:click="to">Добавить породу</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nopic: require( '../assets/nopic.jpg' )
            }
        },
        computed: {
            animals() {
                return this.$store.getters.getAnimals;
            },
            ctg() {
                return this.$route.params.ctg;                
            }
        },
        methods: {
            // если фото удалят, будет вставляться дефолтное изображение
            nopicture(value) {
                value.target.src = this.nopic
            },
            to() {
                this.$router.push( '/add' );
            }
        },
        filters: {
            // обрезаем текст для предварительного просмотра записи
            snippet: function ( value ) {
                return value.slice(0, 101) + '...';
            }
        }
    };
</script>

<style scoped>
    li {
        padding-bottom: 15px;
        border-bottom: 1px solid #E5E5E5;
    }

    p {
        font-size: 18px;
        margin-top: 15px;
        color: #2D2D30;
    }

    h5 {
        color: cadetblue;
    }

    a {
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
    }
    a:link {
        color: #007ACC;
    }
    a:visited {
        color: #007ACC;
    }
    a:hover {
        color: aqua;
    }
    a:active {
        color: aqua;
    }

</style>