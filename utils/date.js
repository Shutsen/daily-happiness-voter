const getYearMonthDay = () => {
	const dateObject = new Date()
	const day = dateObject.getDate()
	let month = dateObject.getMonth() + 1
	const year = dateObject.getFullYear()

	if (month < 10) {
		month = '0' + month
	}

	return `${day}/${month}/${year}`
}

module.exports = {
	getYearMonthDay
}