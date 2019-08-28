exports.seed = async knex => {
	await knex('users').del()
	return knex('users').insert([
		{
			id: "cb9ee095-8f23-47e7-8c3c-3d72aa7e00b3",
			first_name: 'Cor',
			last_name: 'Tisone',
			password: '$2a$10$HMSbkGunEJIYOV.OlLRpj.cAH8erv2pHiLk.3xoBDk5dShZNO4R4y',
			email: 'cor@tisone.com'
		},
		{ 
			id: "2c7630e9-b067-4971-99e0-17d4e5bf5e4c",
			first_name: 'Brik',
			last_name: 'Olage',
			password: '$2a$10$tcBBn3MhjUHt5Kp3HNQ.2O4UO1TJ7Qe08lsXPsgYNgOWwi5rdoV4W',
			email: 'brik@olage.com'
		},
		{ 
			id: "c50627d0-3f23-4041-ae22-c9dbb9829a5a",
			first_name: 'Conny',
			last_name: 'Komen',
			password: '$2a$10$QKAmGCuhe.05vTT2SVJHq.V7by7hXz/BTdRemPqPUwCEJdhDI4fq2',
			email: 'conny@komen.com'
		}
	])
}
