<template>
    <div class="mx-auto mt-2 mb-5" style="width: 70%;">
        <div v-for="animal in animals" v-if="animal.title == name">

            <!-- основной блок -->
            <div class="mb-4">
                <h2>{{ animal.title }}</h2>
                <img class="mx-auto d-block my-2" :src="animal.image" @error="nopicture" v-if="nopic"   />
                <p class="text-justify my-2" style="text-indent: 20px;">{{ animal.text }}</p>
                <h5>Категория: {{ animal.ctg }}</h5>
            </div>
            <!-- основной блок -->

            <!-- поле для ввода комментария и сами комменты -->
            <textarea class="form-control mt-4" rows="3" v-model="message" placeholder="Оставьте анонимный комментарий..."></textarea>

            <div class="text-center">
                <button v-on:click="msgSave" class="btn btn-light my-3">Отправить</button>
            </div>

            <ol>
                <li v-for="(comment, index) in filterId(comments)">
                    <h6>Комментарий {{ index+1 }}:</h6>
                    <p class="text-justify">{{ comment.msg }}</p>
                </li>
            </ol>
            <!-- поле для ввода комментария и сами комменты -->

        </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                nopic: true,
                message: '',
                name: '',
            }
        },
        // достаём комменты из хранилища
        computed: {
            animals() {
                return this.$store.getters.getAnimals;
            },
            comments() {
                return this.$store.getters.getComments;
            }
        }, 
        methods: {
            // отдаем новый коммент в хранилище
            msgSave() {
                this.$store.dispatch( 'setComment', { title: this.name, txt: this.message } );
                this.message = '';
            },
            // если фото удалят, будет вставляться дефолтное изображение
            nopicture() {
                this.nopic = false;
            },
            // фильтруем комменты по id записи
            filterId( value ) {
                return value.filter( ( val ) => {
                    return val.anml === this.name;
                } );
            }
        },
        created() {
            this.name = this.$route.params.title;
        }
    };
</script>

<style scoped>
    h2 {
        text-align: center;
        color: #007ACC;
    }

    h5 {
        text-align: right;
        color: cadetblue;
    }

    h6 {
        color: cadetblue;
        text-decoration: underline;
    }

</style>