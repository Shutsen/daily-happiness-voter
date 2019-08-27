const Koa = require('koa')
const http = require('http')
const bodyParser = require('koa-bodyparser')
const morgan = require('koa-morgan')
const helmet = require('koa-helmet')
const KoaRouter = require('koa-router')

const app = new Koa()
const router = new KoaRouter()
const port = process.env.PORT || 3000

const server = http.createServer(app.callback())

process.on('unhandledRejection', error => {
	console.error('Log coming from unhandledRejection', error.message)
	console.error(error)
})

app.on('error', (err) => {
	console.error(err)
})

app.use(helmet())
app.use(bodyParser())
app.use(morgan('dev'))
app.use(router.routes())

server.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})