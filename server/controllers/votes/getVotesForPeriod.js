const votes = require('../../database/queries/votes')
const { escape } = require('validator')

const getVotesForPeriod = async (ctx) => {
	const days = escape(ctx.params.days)
	const response = await votes.getVotesForPeriod(days)
	ctx.body = response
}

module.exports = getVotesForPeriod