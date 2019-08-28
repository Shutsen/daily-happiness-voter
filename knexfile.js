require('dotenv').config()
const path = require('path')
const BASE_PATH = path.join(__dirname, 'server', 'database')

const host = process.env.DATABASE_HOST
const database = process.env.DATABASE_NAME

const config = {
	client: 'pg',
	connection: `postgres://${host}/${database}`,
	migrations: {
		directory: path.join(BASE_PATH, 'migrations')
	},
	seeds: {
		directory: path.join(BASE_PATH, 'seeds')
	}
}

module.exports = config