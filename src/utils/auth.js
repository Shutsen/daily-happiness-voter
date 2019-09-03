const { EventBus } = require('./eventBus')
const { setAxiosAuthHeader, removeAxiosAuthHeader } = require('../utils/axios')

const setAuthenticatedState = (token, user_id) => {
	setAxiosAuthHeader(token)
	localStorage.setItem('access_token', token)
	localStorage.setItem('user_id', user_id)
	EventBus.$emit('logged-in', token)
}

const removeAuthenticatedState = () => {
	localStorage.removeItem('access_token')
	localStorage.removeItem('user_id')
	removeAxiosAuthHeader()
}

module.exports = {
	setAuthenticatedState,
	removeAuthenticatedState
}