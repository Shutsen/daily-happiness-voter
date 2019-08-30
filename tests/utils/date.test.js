const { getYearMonthDay } = require('../../utils/date')

test('Should output the correct date', () => {
	let d = new Date("August 9, 1986 09:08:00");
	let date = getYearMonthDay(d)

	expect(date).toBe('09/08/1986')
})