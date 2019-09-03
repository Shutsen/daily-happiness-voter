const votes = require('../../database/queries/votes')
const { escape } = require('validator')

const getVotesForPeriod = async (ctx) => {
	const days = escape(ctx.params.days)

	const allowedRequestAmount = ['1', '7', '30']
	if (allowedRequestAmount.indexOf(days) == -1) {
		throw new Error('Invalid request')
	}

	const response = await votes.getVotesForPeriod(days)
	ctx.body = response
}

module.exports = getVotesForPeriod