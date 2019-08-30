const knex = require('../connection')
const { getYearMonthDay } = require('../../../utils/date')

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

Votes.addVote = async (score) => {
	try {
		const today = getYearMonthDay()
		const response = await knex('votes')
			.select('*')
			.where('date', today)

		// today has no votes and thus does not exist in our db
		if (!response.length) {
			return await knex('votes')
				.insert({ date: today, happiness_score: score })
		}

		// today has votes, add the score to the total
		return await knex('votes')
			.update({ happiness_score: knex.raw(`happiness_score + ${score}`) })
			.where('date', today)
	} catch(err) {
		console.error('Votes query: Failed to vote')
		throw err
	}
}

module.exports = Votes