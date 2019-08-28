const knex = require('../connection')
const { getYearMonthDay } = require('../../services/date')

let Users = {}

Users.getAllUsers = async () => {
	try {
		const response = await knex('users')
			.select('first_name', 'last_name', 'last_voted_at', 'is_manager')

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

Users.updateLastVotedAt = async (email) => {
	try {
		return await knex('users')
			.update({ last_voted_at: getYearMonthDay() })
			.where('email', email)

	} catch(err) {
		console.error('Users query: Failed to update last_voted_at')
		throw err
	}
}

module.exports = Users