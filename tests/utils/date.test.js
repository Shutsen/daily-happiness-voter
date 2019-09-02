const { getDayMonthYearString, getTodayAndTomorrowObject } = require('../../utils/date')

test('Should output the correct date', () => {
	let d = new Date("August 9, 1986 09:08:00");
	let date = getDayMonthYearString(d)

	expect(date).toBe('09/08/1986')
})

test('Should output the correct date', () => {
	let d = new Date("August 9, 1986 09:08:00");
	let date = getTodayAndTomorrowObject(d)

	expect(date).toEqual({
		"today": {
			"day": "09",
			"month": "08",
			"year": 1986
		}, 
		"tomorrow": {
			"day": 10,
			"month": "08",
			"year": 1986
		}
	})
})