const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

let Auth = {}

/**
 * Hash a password
 * @param {String} password 
 * @returns {String} hashedPassword
 */
Auth.hash = async password => {
	const hashedPassword = await bcrypt.hash(password, 10)
	return hashedPassword;
};

/**
 * Authenticate user - Compare the input password with the hashed password in the DB
 * @param {String} inputPassword - the password the user tries to authenticate with
 * @param {String} hashedPassword - the hashed password in our DB
 * @returns {Boolean} isValidPassword
 */
Auth.authenticate = async (inputPassword, hashedPassword) => {
	const isValidPassword = await bcrypt.compare(inputPassword, hashedPassword)
	return isValidPassword
}

/**
 * Generate token
 * @param {Object} user - the user object - for now we only use it's id
 * @returns {String} token - the generated token
 */
Auth.generateAuthToken = (user) => {
	const token = jwt.sign({ id: user.id }, process.env.JWT_KEY)
	return token
}

module.exports = Auth