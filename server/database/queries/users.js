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

module.exports = Users