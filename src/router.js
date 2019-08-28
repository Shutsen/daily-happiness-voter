import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from './pages/LandingPage.vue'
import SignupPage from './pages/SignupPage.vue'
import LoginPage from './pages/LoginPage.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: LandingPage
		},
		{
			path: '/signup',
			component: SignupPage
		},
		{
			path: '/login',
			component: LoginPage
		}
	]
})

export default router