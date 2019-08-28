const Router = require('koa-router')
const router = new Router()
const { escape } = require('validator')

const auth = require('../services/auth')
const users = require('../database/queries/users')

router.get('/', async ctx => {
	const response = await users.getAllUsers()
	ctx.body = response
})

router.get('/:user_id', async ctx => {
	const user_id = escape(ctx.params.user_id)
	const response = await users.getUserById(user_id)
	ctx.body = response
})

router.post('/signup', async ctx => {
	let { first_name, last_name, email, password } = ctx.request.body

	// check if email already exists - if so return early
	const existingUser = await users.getUserByEmail(email)
	if (existingUser) {
		return ctx.body = { message: 'This email address is already in use..' }
	}
	password = await auth.hash(password)
	const user = await users.signup({ first_name, last_name, email, password })

	const token = auth.generateAuthToken(user)
	users.saveAuthToken(user.email, token)

	ctx.body = {
		message: `Sweet! Succesfully signed you up, ${first_name}!`,
		user_id: user.id,
		token
	}
})

router.post('/login', async ctx => {
	const { email, password } = ctx.request.body

	// check if we have the email in our db
	const user = await users.getUserByEmail(email)
	if (!user) {
		ctx.status = 401
		return ctx.body = { message: 'User authentication failed' }
	}

	const isValidPassword = await auth.authenticate(password, user.password)
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
})

module.exports = router