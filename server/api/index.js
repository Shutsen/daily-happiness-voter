const Router = require('koa-router')
const router = new Router()

const users = require('./users.api')

router.use('/api/users', users.routes())

module.exports = router