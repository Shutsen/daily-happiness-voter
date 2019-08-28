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
		console.log(response)
		return response.data
	} catch(e) {
		console.log(e)
		throw e
	}
}

export default Users