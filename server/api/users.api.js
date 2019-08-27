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
	const hashedPassword = await auth.hash(password)

	const response = await users.signup({
		first_name,
		last_name,
		email,
		password: hashedPassword
	})
	ctx.body = { message: `Sweet! Succesfully signed you up, ${first_name}!` }
})

module.exports = router