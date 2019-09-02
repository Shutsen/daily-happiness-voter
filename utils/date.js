const getDayMonthYearString = (dateObject = new Date()) => {
	const { day, month, year } = getYearMonthDayObject(dateObject)
	return `${day}/${month}/${year}`
}

const getYearMonthDayObject = (dateObject = new Date()) => {
	let day = dateObject.getDate()
	let month = dateObject.getMonth() + 1
	const year = dateObject.getFullYear()

	if (day < 10) day = '0' + day
	if (month < 10) month = '0' + month

	return { day, month, year }
}

const getTodayAndTomorrowObject = (dateObject = new Date()) => {
	const { day, month, year } = getYearMonthDayObject(dateObject)

	dateObject.setDate(dateObject.getDate() + 1)

	let tomorrow_day = dateObject.getDate()
	let tomorrow_month = dateObject.getMonth() + 1
	const tomorrow_year = dateObject.getFullYear()

	if (tomorrow_day < 10) tomorrow_day = '0' + tomorrow_day
	if (tomorrow_month < 10) tomorrow_month = '0' + tomorrow_month

	return {
		today: { day, month, year },
		tomorrow: { day: tomorrow_day, month: tomorrow_month, year: tomorrow_year }
	}
}

module.exports = {
	getDayMonthYearString,
	getYearMonthDayObject,
	getTodayAndTomorrowObject
}