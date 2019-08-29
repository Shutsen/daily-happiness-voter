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
	const { score, user_id } = ctx.request.body

	const response = await votes.addVote(score)
	users.updateLastVotedAt(user_id)
	ctx.body = response
})

module.exports = router