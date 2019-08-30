const getYearMonthDay = (dateObject = new Date()) => {
	let day = dateObject.getDate()
	let month = dateObject.getMonth() + 1
	const year = dateObject.getFullYear()
	
	if (day < 10) day = '0' + day
	if (month < 10) month = '0' + month

	return `${day}/${month}/${year}`
}

module.exports = {
	getYearMonthDay
}