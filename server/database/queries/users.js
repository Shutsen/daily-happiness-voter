const knex = require('../connection')

let Users = {}

Users.getAllUsers = async () => {
	try {
		const response = await knex('users')
			.select('first_name', 'last_name', 'last_voted_at')

		return response
	} catch(err) {
		console.error('Users query: Failed to get users')
		throw err
	}
}

Users.getUserByEmail = async (email) => {
	try {
		const user = await knex('users')
			.select('*')
			.where('email', email)
			.first()

		if (user) {
			return user
		}
		return null
	} catch(err) {
		console.error('Users query: Failed to get individual user')
		throw err
	}
}

Users.signup = async ({ first_name, last_name, email, password }) => {
	try {
		const response = await knex('users')
			.insert({ first_name, last_name, email, password })

		return response
	} catch(err) {
		console.error('Users query: Failed to get users')
		throw err
	}
}

Users.saveAuthToken = async (userEmail, token) => {
	try {
		const reponse = await knex('users')
			.update('token', token)
			.where('email', userEmail)
	} catch(err) {
		console.error('Users query: Failed to save token')
		throw err
	}
}

module.exports = Users