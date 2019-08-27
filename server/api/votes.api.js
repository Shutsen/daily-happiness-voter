const Router = require('koa-router')
const router = new Router()

const votes = require('../database/queries/votes')
const users = require('../database/queries/users')

router.get('/', async ctx => {
	const response = await votes.getVotesForPeriod()
	ctx.body = response
})

router.post('/vote', async ctx => {
	// to get from request
	const email = 'vancampenhoutgeert@gmail.com'

	const response = await votes.addVote(ctx.request.body.score)
	users.updateLastVotedAt(email)
	ctx.body = response
})

module.exports = router