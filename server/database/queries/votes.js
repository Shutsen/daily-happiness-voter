const knex = require('../connection')
const { getYearMonthDay } = require('../../../utils/date')

let Votes = {}

// period will be one of following: today, last_week, last_month
// until that's wired up, we get all days
Votes.getVotesForPeriod = async () => {
	try {
		const response = await knex('daily_happiness')
			.select('*')
		return response
	} catch(err) {
		console.error('Votes query: Failed to get votes for period')
		throw err
	}
}

Votes.addVote = async (score) => {
	try {
		const today = getYearMonthDay()
		const response = await knex('daily_happiness')
			.select('*')
			.where('date', today)

		// today has no votes and thus does not exist in our db
		if (!response.length) {
			return await knex('daily_happiness')
				.insert({ date: today, happiness_score: score })
		}

		// today has votes, add the score to the total
		return await knex('daily_happiness')
			.update({ happiness_score: knex.raw(`happiness_score + ${score}`) })
			.where('date', today)
	} catch(err) {
		console.error('Votes query: Failed to vote')
		throw err
	}
}

module.exports = Votes