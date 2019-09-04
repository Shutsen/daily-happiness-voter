exports.seed = async knex => {
	let seedData = [
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 1, neutral: 2, negative: 4 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 2, neutral: 3, negative: 2 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 4, neutral: 1, negative: 3 },
		{ positive: 3, neutral: 2, negative: 2 },
		{ positive: 5, neutral: 3, negative: 1 },
		{ positive: 3, neutral: 1, negative: 3 },
		{ positive: 1, neutral: 2, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 2, neutral: 1, negative: 2 },
		{ positive: 3, neutral: 3, negative: 1 },
		{ positive: 2, neutral: 1, negative: 5 },
		{ positive: 4, neutral: 1, negative: 1 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 2, neutral: 3, negative: 2 },
		{ positive: 3, neutral: 3, negative: 1 },
		{ positive: 4, neutral: 1, negative: 3 },
		{ positive: 3, neutral: 2, negative: 1 },
		{ positive: 2, neutral: 1, negative: 2 },
		{ positive: 3, neutral: 3, negative: 2 },
		{ positive: 4, neutral: 1, negative: 1 },
		{ positive: 2, neutral: 1, negative: 3 },
		{ positive: 2, neutral: 3, negative: 1 },
		{ positive: 2, neutral: 1, negative: 3 },
		{ positive: 3, neutral: 1, negative: 1 },
		{ positive: 2, neutral: 2, negative: 2 },
		{ positive: 1, neutral: 3, negative: 3 }
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
