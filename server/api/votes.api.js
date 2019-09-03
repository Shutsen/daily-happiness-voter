const Router = require('koa-router')
const router = new Router()
const VotesController = require('../controllers/votes')

router.get('/:days', VotesController.getVotesForPeriod)
router.post('/', VotesController.addVote)

module.exports = router