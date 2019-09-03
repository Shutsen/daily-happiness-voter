const addVote = require('./addVote')
const getVotesForPeriod = require('./getVotesForPeriod')

const VotesController = {}

VotesController.addVote = addVote
VotesController.getVotesForPeriod = getVotesForPeriod

module.exports = VotesController