const users = require('../../database/queries/users')
const auth = require('../../services/auth')

const loginUser = async (ctx) => {
	const { email, password } = ctx.request.body

	// check if we have the email in our db
	const user = await users.getUserByEmail(email)
	if (!user) {
		ctx.status = 401
		return ctx.body = { message: 'User authentication failed' }
	}

	const isValidPassword = await auth.authenticate(password, user.password)
	// invalid password - return
	if (!isValidPassword) {
		ctx.status = 401
		return ctx.body = { message: 'User authentication failed' }
	}

	const token = auth.generateAuthToken(user)
	users.saveAuthToken(user.email, token)

	return ctx.body = {
		message: 'Succesfully logged in',
		user_id: user.id,
		token
	}
}

module.exports = loginUser