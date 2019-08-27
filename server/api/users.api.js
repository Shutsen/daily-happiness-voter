const Router = require('koa-router')
const router = new Router()

const users = require('../database/queries/users')

router.get('/', async ctx => {
	const response = await users.getAllUsers()
	ctx.body = response
})

module.exports = router