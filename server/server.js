require('dotenv').config()
const Koa = require('koa')
const http = require('http')
const bodyParser = require('koa-bodyparser')
const morgan = require('koa-morgan')
const helmet = require('koa-helmet')
const cors = require('@koa/cors')
const KoaRouter = require('koa-router')
const jwt = require('koa-jwt')
const api = require('./api')
const cronSchedule = require('./controllers/cron')

const app = new Koa()
const router = new KoaRouter()
const port = process.env.PORT || 3000

const server = http.createServer(app.callback())

cronSchedule()

process.on('unhandledRejection', error => {
	console.error('Log coming from unhandledRejection', error.message)
	console.error(error)
})

app.on('error', (err) => {
	console.error('Damn this ain\'t working!', err)
})

app.use(cors())
app.use(helmet())
app.use(bodyParser())
app.use(morgan('dev'))
app.use(jwt({ secret: process.env.JWT_KEY }).unless({ path: ['/api/users/signup', '/api/users/login'] }))
app.use(api.routes())
app.use(router.routes())

server.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})