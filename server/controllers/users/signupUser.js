const { isValidEmail } = require('../../../utils/validation')
const { sendWelcomeEmail } = require('../../services/emails/account')

const users = require('../../database/queries/users')
const auth = require('../../services/auth')

const signupUser = async (ctx) => {
	let { first_name, last_name, email, password } = ctx.request.body

	if (!isValidEmail(email)) {
		return ctx.body = { message: 'Please provide a valid email' }
	}

	// check if email already exists - if so return early
	const existingUser = await users.getUserByEmail(email)
	if (existingUser) {
		return ctx.body = { message: 'This email address is already in use..' }
	}
	password = await auth.hash(password)
	const user = await users.signup({ first_name, last_name, email, password })

	const token = auth.generateAuthToken(user)
	users.saveAuthToken(email, token)

	sendWelcomeEmail(email, first_name)

	ctx.body = {
		message: `Sweet! Succesfully signed you up, ${first_name}!`,
		user_id: user.id,
		token
	}
}

module.exports = signupUser