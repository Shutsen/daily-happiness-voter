require('dotenv').config()
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
	if (process.env.NODE_ENV === 'development') {
		email = 'vancampenhoutgeert@gmail.com'
	}
	
	sgMail.send({
		to: email,
		from: 'thehappinessvoter@gmail.com',
		subject: 'Welcome to the happiness voter!',
		text: `Hello ${name}, welcome to this app!`,
	})
}

module.exports = {
	sendWelcomeEmail
}