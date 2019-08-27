const knex = require('../connection')

const Users = {}

Users.getAllUsers = async () => {
	try {
		const response = await knex('users')
			.select('*')

		return response
	} catch(err) {
		console.error('Users query: Failed to get users')
		throw err
	}
}

module.exports = Users