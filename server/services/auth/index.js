const bcrypt = require('bcryptjs')

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

module.exports = Auth