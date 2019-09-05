const cron = require("node-cron")
const knex = require('../../database/connection')

// schedule tasks to be run on the server
const cronSchedule = () => {
	cron.schedule("59 23 * * *", async () => {
		try {
			console.log("---------------------")
			console.log("Running Cron Job")
			let today = new Date()
			// every day at 23:59 we add the next day as an extra row in the votes table
			today.setDate(today.getDate() + 1)
			const response = await knex('votes')
				.insert({
					date: today,
					positive: 0,
					neutral: 0,
					negative: 0
				})
			console.log(response)

			let hour = today.getHours()
			let minutes = today.getMinutes()
			
			if (hour < 10) hour = `0${hour}`
			if (minutes < 10) minutes = `0${minutes}`
			
			console.log(`Cron job succeeded at ${hour}:${minutes}`)
			console.log("---------------------")
		} catch(err) {
			console.error('Cron job failed: Could not add row to votes table')
			throw err
		}
	})
}

module.exports = cronSchedule