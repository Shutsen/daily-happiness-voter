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
		},
		{ 
			id: "767cfa91-bb5d-4a0d-904e-4cb711a5569e",
			first_name: 'Ben',
			last_name: 'Dover',
			password: '$2a$10$fKcMmOP0Atz/gIolTeFX8up8c7MVNs8Gx8jZlXa.jOxKdHv2DHeZy',
			email: 'ben@dover.com'
		},
		{ 
			id: "2dbd864f-5005-4a2e-9e98-21a289a86eca",
			first_name: 'Magda',
			last_name: 'Wel',
			password: '$2a$10$2URBYNnmBQq8NznDV7AFNugkP4fRboTREh3s/2pSA0MyJ6Oe3EJoK',
			email: 'magda@wel.com',
			is_manager: 1
		}
	])
}
