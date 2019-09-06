const knex = require('../connection')
const { getDayMonthYearString } = require('../../../utils/date')

let Users = {}

Users.getAllUsers = async () => {
	try {
		const response = await knex('users')
			.select('id', 'first_name', 'last_name', 'last_voted_at', 'is_manager')

		return response
	} catch(err) {
		console.error('Users query: Failed to get users')
		throw err
	}
}

Users.getUserById = async (id) => {
	try {
		const user = await knex('users')
			.select('first_name', 'last_name', 'last_voted_at', 'is_manager')
			.where('id', id)
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
			.returning('*')
			.insert({ first_name, last_name, email, password })

		return response[0]
	} catch(err) {
		console.error('Users query: Failed to get users')
		throw err
	}
}

Users.updateLastVotedAt = async (id) => {
	try {
		return await knex('users')
			.update({ last_voted_at: getDayMonthYearString() })
			.where('id', id)

	} catch(err) {
		console.error('Users query: Failed to update last_voted_at')
		throw err
	}
}

module.exports = Users