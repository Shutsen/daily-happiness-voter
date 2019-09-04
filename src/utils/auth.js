import { EventBus } from './eventBus'
import { setAxiosAuthHeader, removeAxiosAuthHeader } from '../utils/axios'
import cookie from './cookies'
import router from '../router'

let Auth = {}

Auth.setAuthenticatedState = (token) => {
	setAxiosAuthHeader(token)
	cookie.setCookie('happiness_voter', token)
	EventBus.$emit('logged-in', token)
}

Auth.removeAuthenticatedState = () => {
	cookie.removeCookie('happiness_voter')
	removeAxiosAuthHeader()
}

Auth.checkAuth = () => {
	const token = cookie.getCookie('happiness_voter')
	if (token) {
		setAxiosAuthHeader(token)
		EventBus.$emit('logged-in', token)
		return
	}
	router.push('/')
}

export default Auth