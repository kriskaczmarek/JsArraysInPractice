const arr = ["J", "U", "S", "T", "J", "O", "I", "N", ".", "I", "T"]
const camelCaseArr = arr.reduce((a, b, c) => {
	if (c % 2 !== 0) {
		return a + b.toLowerCase()
	}
	return a + b
}, "")
console.log(camelCaseArr)
