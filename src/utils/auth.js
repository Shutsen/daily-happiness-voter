import { EventBus } from './eventBus'
import { setAxiosAuthHeader, removeAxiosAuthHeader } from '../utils/axios'
import cookie from './cookies'
import router from '../router'
import jwt from 'jsonwebtoken'

let Auth = {}

Auth.getUserId = () => {
	const token = cookie.getCookie('happiness_voter')
	const decoded = jwt.decode(token, process.env.JWT_KEY)
	return decoded.id
}

Auth.isManager = () => {
	const token = cookie.getCookie('happiness_voter')
	if (!token) {
		return false
	}
	const decoded = jwt.decode(token, process.env.JWT_KEY)
	return !!decoded.is_manager
}

Auth.setAuthenticatedState = (token) => {
	setAxiosAuthHeader(token)
	cookie.setCookie('happiness_voter', token)
	EventBus.$emit('logged-in')
}

Auth.removeAuthenticatedState = () => {
	cookie.removeCookie('happiness_voter')
	removeAxiosAuthHeader()
}

Auth.checkAuth = () => {
	const token = cookie.getCookie('happiness_voter')
	if (token) {
		setAxiosAuthHeader(token)
		EventBus.$emit('logged-in')
		return
	}
	router.push('/')
}

Auth.isAuthenticated = () => {
	const token = cookie.getCookie('happiness_voter')
	return !!token	
}

export default Auth