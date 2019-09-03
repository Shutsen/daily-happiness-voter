const votes = require('../../database/queries/votes')
const users = require('../../database/queries/users')

const addVote = async (ctx) => {
	const { score, user_id } = ctx.request.body

	const allowedScores = [-1, 0, 1]
	if (allowedScores.indexOf(score) === -1) {
		throw new Error('Invalid score')
	}

	const response = await votes.addVote(score)
	users.updateLastVotedAt(user_id)
	ctx.body = response
}

module.exports = addVote