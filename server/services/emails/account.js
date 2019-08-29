require('dotenv').config()
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: 'vancampenhoutgeert@gmail.com',
		from: 'thehappinessvoter@gmail.com',
		subject: 'Welcome to the happiness voter!',
		text: `Hello ${name}, welcome to this app!`,
	})
}

module.exports = {
	sendWelcomeEmail
}