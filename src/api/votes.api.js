import axios from 'axios'

let Votes = {}

/**
 * Get happiness score for certain period
 * @param {String} days = '1', '7' or '30'
 */
Votes.getVotesForPeriod = async (days) => {
	try {
		const response = await axios.get(`/api/votes/${days}`)
		return response.data
	} catch(e) {
		console.error(e)
		throw e
	}
}

/**
 * Vote happiness score for today
 */
Votes.addVote = async (score, user_id) => {
	try {
		const response = await axios.post('/api/votes', { score, user_id })
		return response.data
	} catch(e) {
		console.error(e)
		throw e
	}
}

export default Votes