//method reduce in practice
//joinin letters to obtain words, odd letters change to lower
const arr = ["J", "U", "S", "T", "J", "O", "I", "N", ".", "I", "T"]
const camelCaseArr = arr.reduce((a, b, c) => {
	if (c % 2 !== 0) {
		return a + b.toLowerCase()
	}
	return a + b
}, "")
console.log(camelCaseArr)
//OUTPUT:  "JuStJoIn.iT"

//method map in practice
const arr1 = ["J", "U", "S", "T", "J", "O", "I", "N", ".", "I", "T"]
const arr2 = arr1.map((a, b) => {
	if (b % 2 !== 0 && !!a.toUpperCase()) {
		return a.toLowerCase()
	}
	return a
})
console.log(arr2)
//OUTPUT:  ['J', 'u', 'S', 't', 'J', 'o', 'I', 'n', '.', 'i', 'T']


