const Router = require('koa-router')
const router = new Router()

const votes = require('../database/queries/votes')
const users = require('../database/queries/users')

router.get('/:days', async ctx => {
	const days = escape(ctx.params.days)
	const response = await votes.getVotesForPeriod(days)
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