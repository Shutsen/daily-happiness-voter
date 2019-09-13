import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from './pages/LandingPage.vue'
import SignupPage from './pages/SignupPage.vue'
import LoginPage from './pages/LoginPage.vue'
import DashboardPage from './pages/DashboardPage.vue'
import ManagerPage from './pages/ManagerPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'landing',
			meta: { public: true },
			component: LandingPage
		},
		{
			path: '/signup',
			name: 'signup',
			meta: { public: true },
			component: SignupPage
		},
		{
			path: '/login',
			name: 'login',
			meta: { public: true },
			component: LoginPage
		},
		{
			path: '/dashboard/manager',
			name: 'dashboard-manager',
			meta: { manager: true },
			component: ManagerPage
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: DashboardPage
		},
		{
			path: '/*',
			name: 'not-found',
			component: NotFoundPage
		}
	]
})

export default router