const Router = require('koa-router')
const router = new Router()

const users = require('./users.api')
const votes = require('./votes.api')

router.use('/api/users', users.routes())
router.use('/api/votes', votes.routes())

module.exports = router