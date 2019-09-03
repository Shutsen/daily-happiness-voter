const users = require('../../database/queries/users')
const { escape } = require('validator')

const getUserDetail = async (ctx) => {
	const user_id = escape(ctx.params.user_id)
	const response = await users.getUserById(user_id)
	ctx.body = response
}

module.exports = getUserDetail