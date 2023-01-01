﻿import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	/*{
		path: '/movie/:id',
		name: 'Movie Detail',
		component: MovieDetail
	}*/
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router