const axios = require('axios')

const setAxiosAuthHeader = (token) => {
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const removeAxiosAuthHeader = () => {
	delete axios.defaults.headers.common['Authorization']
}

module.exports = {
	setAxiosAuthHeader,
	removeAxiosAuthHeader
}