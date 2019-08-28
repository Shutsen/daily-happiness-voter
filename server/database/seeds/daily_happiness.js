exports.seed = async knex => {
	await knex('daily_happiness').del()
	return knex('daily_happiness').insert([
		{
			date: '01/09/2019',
			happiness_score: 2
		},
		{
			date: '02/09/2019',
			happiness_score: -3
		},
		{
			date: '03/09/2019',
			happiness_score: 5
		},
		{
			date: '04/09/2019',
			happiness_score: 4
		},
		{
			date: '05/09/2019',
			happiness_score: 7
		},
		{
			date: '06/09/2019',
			happiness_score: 4
		},
		{
			date: '07/09/2019',
			happiness_score: 5
		},
		{
			date: '08/09/2019',
			happiness_score: 1
		},
		{
			date: '09/09/2019',
			happiness_score: 4
		}
	])
}
