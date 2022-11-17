//method reduce in practice
//joinin letters to obtain words, odd letters change to lower
const arr = ["J", "U", "S", "T", "J", "O", "I", "N", ".", "I", "T"]
const camelCaseArr = arr.reduce((a, b, c) => {
	if (c % 2 !== 0) {
		return a + b.toLowerCase()
	}
	return a + b
}, "")
//console.log(camelCaseArr)
//OUTPUT:  "JuStJoIn.iT"

//method map in practice
const arr1 = ["J", "U", "S", "T", "J", "O", "I", "N", ".", "I", "T"]
const arr2 = arr1.map((a, b) => {
	if (b % 2 !== 0 && !!a.toUpperCase()) {
		return a.toLowerCase()
	}
	return a
})
//console.log(arr2)
//OUTPUT:  ['J', 'u', 'S', 't', 'J', 'o', 'I', 'n', '.', 'i', 'T']

//method filter in practice
const arr3 = ["J", "U", "S", "T", "J", "O", "I", "N", ".", "I", "T"]
const arr4 = arr3.filter(a => {
	if (a < "O") {
		return a
	}
})
console.log(arr4)
//OUTPUT: ['J', 'J', 'I', 'N', '.', 'I']
