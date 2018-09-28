import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import More from './More.vue';
import Detail from './Detail.vue';
import Add from './Add.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import store from './store.js';

Vue.component( 'app-header', Header );
Vue.component( 'app-footer', Footer );

Vue.use( VueRouter );

const router = new VueRouter( {
    routes: [
        { path: '/a/:ctg', name: 'ctg', component: More }, // навигация по категориям
        { path: '/detail/:title', name: 'dtl', component: Detail }, // отдельный блок
        { path: '/add', name: 'add', component: Add }
    ]
} )   

// задаем стартовую страницу
router.push({ name: 'ctg', params: { ctg: 'all' }})

Vue.config.productionTip = true;

new Vue( {
    el: '#index',
    router,
    store: store,
    render: h => h( App )
} )

