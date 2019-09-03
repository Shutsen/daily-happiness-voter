const { isValidEmail } = require('../../utils/validation')

test('Should return true for valid emails', () => {
	const input = 'vancampenhoutgeert@gmail.com'
	const isValid = isValidEmail(input)
	expect(isValid).toBeTruthy()
})

test('Should return false for invalid emails', () => {
	const input_one = 'gibberish'
	const input_two = 'falseEmail@com'
	const oneIsValid = isValidEmail(input_one)
	const twoIsValid = isValidEmail(input_two)
	expect(oneIsValid).toBeFalsy()
	expect(twoIsValid).toBeFalsy()
})