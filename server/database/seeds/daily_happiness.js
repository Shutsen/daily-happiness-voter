exports.seed = async knex => {
	await knex('daily_happiness').del()
	return knex('daily_happiness').insert([
		{
			date: '01/08/2019',
			happiness_score: 2
		},
		{
			date: '02/08/2019',
			happiness_score: -3
		},
		{
			date: '03/08/2019',
			happiness_score: 0
		},
		{
			date: '04/08/2019',
			happiness_score: 4
		},
		{
			date: '05/08/2019',
			happiness_score: 7
		},
		{
			date: '06/08/2019',
			happiness_score: 4
		},
		{
			date: '07/08/2019',
			happiness_score: 5
		},
		{
			date: '08/08/2019',
			happiness_score: 1
		},
		{
			date: '09/08/2019',
			happiness_score: 4
		},
		{
			date: '10/08/2019',
			happiness_score: 3
		},
		{
			date: '11/08/2019',
			happiness_score: 2
		},
		{
			date: '12/08/2019',
			happiness_score: 4
		},
		{
			date: '13/08/2019',
			happiness_score: 2
		},
		{
			date: '14/08/2019',
			happiness_score: 4
		},
		{
			date: '15/08/2019',
			happiness_score: 0
		},
		{
			date: '16/08/2019',
			happiness_score: 1
		},
		{
			date: '17/08/2019',
			happiness_score: 3
		},
		{
			date: '18/08/2019',
			happiness_score: 6
		},
		{
			date: '19/08/2019',
			happiness_score: 5
		},
		{
			date: '20/08/2019',
			happiness_score: 2
		},
		{
			date: '21/08/2019',
			happiness_score: 3
		},
		{
			date: '22/08/2019',
			happiness_score: 0
		},
		{
			date: '23/08/2019',
			happiness_score: -1
		},
		{
			date: '24/08/2019',
			happiness_score: 2
		},
		{
			date: '25/08/2019',
			happiness_score: 4
		},
		{
			date: '26/08/2019',
			happiness_score: 5
		},
		{
			date: '27/08/2019',
			happiness_score: -4
		},
		{
			date: '28/08/2019',
			happiness_score: 3
		},
		{
			date: '29/08/2019',
			happiness_score: 0
		}
	])
}
