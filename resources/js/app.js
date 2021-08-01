require('./bootstrap');


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App.vue'
import PostsIndex from './components/Posts/Index.vue'
import PostsCreate from './components/Posts/Create.vue'

Vue.component('pagination', require('laravel-vue-pagination'));

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: PostsIndex,
			name: 'posts.index'
		},
		{
			path: '/posts/create',
			component: PostsCreate,
			name: 'posts.create'
		},
	]
})

const app = new Vue({
	el: '#app',
	components: {App},
	router
})
