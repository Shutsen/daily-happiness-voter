exports.up = function(knex) {
	const votes = knex.schema.createTable('votes', (table) => {
		table.dateTime('date').notNullable()
		table.integer('positive').defaultTo(0)
		table.integer('neutral').defaultTo(0)
		table.integer('negative').defaultTo(0)
	})

	return Promise.all([ votes ])
};

exports.down = function(knex) {
	const votes = knex.schema.dropTable('votes')

	return Promise.all([ votes ])
};
