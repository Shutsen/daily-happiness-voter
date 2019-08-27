const Router = require('koa-router')
const router = new Router()

const auth = require('../services/auth')
const users = require('../database/queries/users')

router.get('/', async ctx => {
	const response = await users.getAllUsers()
	ctx.body = response
})

router.post('/signup', async ctx => {
	let { first_name, last_name, email, password } = ctx.request.body

	// check if email already exists - if so return early
	const existingUser = await users.getUserByEmail(email)
	if (existingUser.length > 0) {
		return ctx.body = { message: 'This email address is already in use..' }
	}
	password = await auth.hash(password)
	await users.signup({ first_name, last_name, email, password })
	ctx.body = { message: `Sweet! Succesfully signed you up, ${first_name}!` }
})

module.exports = router