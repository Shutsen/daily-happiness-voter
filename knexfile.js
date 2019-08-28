const path = require('path')
const BASE_PATH = path.join(__dirname, 'server', 'database')

const config = {
	client: 'pg',
	connection: 'postgres://localhost/happiness_voter',
	migrations: {
		directory: path.join(BASE_PATH, 'migrations')
	},
	seeds: {
		directory: path.join(BASE_PATH, 'seeds')
	}
}

module.exports = config