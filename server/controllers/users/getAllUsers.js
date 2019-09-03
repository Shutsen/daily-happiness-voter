const users = require('../../database/queries/users')

const getAllUsers = async (ctx) => {
	const response = await users.getAllUsers()
	ctx.body = response
}

module.exports = getAllUsers