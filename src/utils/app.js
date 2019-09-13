import router from '../router'
import auth from './auth'

let App = {}
let _loaded = false

// protect routes
router.beforeEach(async (to, from, next) => {
	if (!to.meta.public && !auth.isAuthenticated()) {
		next('/login')
	}

	if (to.meta.manager && !auth.isManager()) {
		next('/dashboard')
	}
	await next()
})

App.load = async () => {
	if(_loaded) return
	await App.checkRoute()
	_loaded = true
}

/**
 * Check the current route for issues (Used on first load)
 * @returns {Boolean}
 */
App.checkRoute = () => {
	return new Promise(resolve => {
		const route = router.currentRoute

		if(!route.meta.public && !auth.isAuthenticated()) {
			return router.push('/login', resolve)
		}
		resolve()
	})
}

/**
 * Wait until the router is loaded
 */
App.waitForRouter = async () => {
	if(router.currentRoute.name !== null) {
		return Promise.resolve()
	}
	return new Promise(resolve => {
		const checker = setInterval(() => {
			if(router.currentRoute.name !== null) {
				clearInterval(checker)
				return resolve()
			}
		}, 100)
	})
}

export default App