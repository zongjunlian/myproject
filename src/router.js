import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
		{
		  path: '/login',
		  name: 'login',
		  component: () => import('./views/Login.vue')
		},
		{
			path: '/',
			name: 'mymenu',
			component: () => import('./components/mymenu.vue'),
			// redirect:'/home',
			children:[
				{
				  path: '/home',
				  name: 'home',
				  component: () => import('./views/Home.vue')
				},
				{
				  path: '/about',
				  name: 'about',
				  component: () => import('./views/About.vue')
				},
				{
				  path: '/home1',
				  name: 'home1',
				  component: () => import('./views/Home1.vue')
				},
				{
				  path: '/about1',
				  name: 'about1',
				  component: () => import('./views/About1.vue')
				}
			]
		}
		
  ]
})
