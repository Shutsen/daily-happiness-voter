exports.up = knex => {
	const uuid = knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

	const users = knex.schema.createTable('users', (table) => {
		table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
		table.string('first_name').notNullable()
		table.string('last_name').notNullable()
		table.string('password').notNullable()
		table.string('email').notNullable().unique()
		table.string('last_voted_at')
		table.dateTime('created_on').notNullable().defaultTo(knex.fn.now())
	})

	return Promise.all([ uuid, users ])
}

exports.down = knex => {
	const users = knex.schema.dropTable('users')
	const uuid = knex.raw('DROP EXTENSION IF EXISTS "uuid-ossp"')

	return Promise.all([ users, uuid ])
}
