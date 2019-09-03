const Router = require('koa-router')
const router = new Router()
const UsersController = require('../controllers/users')

router.post('/signup', UsersController.signupUser)
router.post('/login', UsersController.loginUser)
router.get('/', UsersController.getAllUsers)
router.get('/:user_id', UsersController.getUserDetail)

module.exports = router