const knex = require('../connection')
const { getTodayAndTomorrowObject } = require('../../../utils/date')

let Votes = {}

Votes.getVotesForPeriod = async (days) => {
	try {
		const response = await knex('votes')
			.orderBy('date', 'desc')
			.select('*')
			.limit(days)
			
		return response
	} catch(err) {
		console.error('Votes query: Failed to get votes for period')
		throw err
	}
}

Votes.getTodayVotes = async () => {
	const { today, tomorrow } = getTodayAndTomorrowObject()
	const response = await knex('votes')
		.select('*')
		.where('date', '>=', `${today.year}-${today.month}-${today.day}T00:00:00Z`)
		.where('date', '<', `${tomorrow.year}-${tomorrow.month}-${tomorrow.day}T00:00:00Z`)

	return response
}

Votes.addVote = async (score) => {
	try {
		let positiveIncrement = 0
		let negativeIncrement = 0
		let neutralIncrement = 0

		if (score > 0) positiveIncrement++
		if (score < 0) negativeIncrement++
		if (score == 0) neutralIncrement++

		const { today, tomorrow } = getTodayAndTomorrowObject()

		return await knex('votes')
			.increment({
				positive: positiveIncrement,
				negative: negativeIncrement,
				neutral: neutralIncrement
			})
			.where('date', '>=', `${today.year}-${today.month}-${today.day}T00:00:00Z`)
			.where('date', '<', `${tomorrow.year}-${tomorrow.month}-${tomorrow.day}T00:00:00Z`)
	} catch(err) {
		console.error('Votes query: Failed to vote')
		throw err
	}
}

module.exports = Votes