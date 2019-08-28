import axios from 'axios'

const token = localStorage.getItem('access_token')

let Votes = {}

/**
 * Get happiness score for certain period
 */
Votes.getHappinessScoreForPeriod = async () => {
	try {
		const response = await axios.get('/api/votes', {
			headers: { Authorization: `Bearer ${token}` }
		})
		return response.data
	} catch(e) {
		console.error(e)
		throw e
	}
}

/**
 * Vote happiness score for today
 */
Votes.addVote = async (score) => {
	try {
		const response = await axios.post('/api/votes/vote', { score }, {
			headers: { Authorization: `Bearer ${token}` }
		})
		return response.data
	} catch(e) {
		console.error(e)
		throw e
	}
}

export default Votes