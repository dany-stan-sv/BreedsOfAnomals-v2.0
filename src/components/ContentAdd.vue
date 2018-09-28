<template>
    <div id="contA" class="mx-auto mt-2" style="width: 60%;">

            <label for="exampleFormControlInput1">Ссылка на изображение в сети (не обязательно):</label>
            <input v-model="path" type="text" class="form-control" id="exampleFormControlInput1">

            <h6 class="alert alert-danger mt-3 mb-0" v-if="errors[0]">{{ errors[0] }}</h6>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Выберите категорию:</label>
                <select v-model="selected" class="form-control" id="exampleFormControlSelect1">
                    <option v-for="item in arr">{{ item }}</option>
                </select>
                <span>{{ selected }}</span>
            </div>

            <h6 class="alert alert-danger mt-3 mb-0" v-if="errors[1]">{{ errors[1] }}</h6>
            <label for="exampleFormControlInput1">Введите название породы:</label>
            <input v-model="name" type="text" class="form-control" id="exampleFormControlInput1">

            <h6 class="alert alert-danger mt-3 mb-0" v-if="errors[2]">{{ errors[2] }}</h6>
            <label for="exampleFormControlTextarea1">Описание:</label>
            <textarea v-model="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            <div class="text-center">
                <button class="btn btn-light mt-3" v-on:click="addAnmls">Добавить</button>
            </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                errors: [],
                path: '',
                selected: null,
                name: null,
                text: null
            }
        },
        computed: {
            // получаем все категории
            arr() {
                return this.$store.getters.getCategory;
            }
        },
        methods: {
            // добавляем новую породу
            addAnmls() {
                if ( this.selected && this.name && this.text ) {
                    this.$store.dispatch( 'setBreed', {
                        path: this.path, category: this.selected, name: this.name, txt: this.text
                    } );
                    this.$router.push( { name: 'ctg', params: { ctg: 'all' } } );
                }

                // обработка пустых обязательных полей
                this.errors = [];

                if ( !this.selected ) {
                    this.errors[0] = 'Вы ничего не выбрали!';
                }
                if ( !this.name ) {
                    this.errors[1] = 'Вы не ввели название!';
                }
                if ( !this.text ) {
                    this.errors[2] = 'Вы не дали описание!';
                }
            }
        }
    }
</script>