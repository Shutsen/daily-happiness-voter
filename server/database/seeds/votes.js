exports.seed = async knex => {
	let seedData = [
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 1, neutral: 1, negative: 4 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 }
	]

	for (let i = 0; i < seedData.length; i++) {
		const day = seedData[i]
		let date = new Date()
		date.setDate(date.getDate() - (seedData.length - i - 1))
		day.date = date
	}

	await knex('votes').del()
	return knex('votes').insert(seedData)
}
