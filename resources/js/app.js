require('./bootstrap');


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VueSweetAlert2 from "vue-sweetalert2"
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetAlert2)

import App from './components/App.vue'

Vue.component('pagination', require('laravel-vue-pagination'));

import routes from './routes'

const app = new Vue({
	el: '#app',
	components: {App},
	router: new VueRouter(routes)
})
