exports.up = function(knex) {
	const daily_happiness = knex.schema.createTable('daily_happiness', (table) => {
		table.string('date').notNullable().unique()
		table.integer('happiness_score').defaultTo(0)
	})

	return Promise.all([ daily_happiness ])
};

exports.down = function(knex) {
	const daily_happiness = knex.schema.dropTable('daily_happiness')

	return Promise.all([ daily_happiness ])
};
