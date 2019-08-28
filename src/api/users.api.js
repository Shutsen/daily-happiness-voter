import axios from 'axios'

let Users = {}

/**
 * New user signup
 * @param {String} first_name
 * @param {String} last_name
 * @param {String} email
 * @param {String} password
 */
Users.signup = async ({ first_name, last_name, email, password }) => {
	try {
		const response = await axios.post('/api/users/signup', { first_name, last_name, email, password })
		return response.data
	} catch(e) {
		console.error(e)
		throw e
	}
}

Users.getUserDetail = async ({ user_id }) => {
	try {
		const response = await axios.get(`/api/users/${user_id}`)
		return response.data
	} catch(e) {
		console.error(e)
		throw e
	}
}

export default Users