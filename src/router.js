import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from './pages/LandingPage.vue'
import SignupPage from './pages/SignupPage.vue'
import LoginPage from './pages/LoginPage.vue'
import DashboardPage from './pages/DashboardPage.vue'
import ManagerPage from './pages/ManagerPage.vue'

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
		},
		{
			path: '/dashboard/manager',
			component: ManagerPage
		},
		{
			path: '/dashboard/:user_id',
			component: DashboardPage
		}
	]
})

export default router