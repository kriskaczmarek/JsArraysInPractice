// MARIO PIRAMID
// let height = 8
// let space
// let hash
// let output
// for (let i=1;i<=height;i++){
//     space = height-i
//     hash = i
//     output = ''
//     for (let j=1;j<=space;j++){
//         output += " "
//     }
//     for (let k=1;k<=hash;k++){
//         output += "#"
//     }
//     console.log(output);
// }
//##################################################################################################################
//DIGITAL DISPLAY

// let size = 22
// let sentence =
// 	"Hello, this is my long sentence, please break it up on the display."

// while (sentence.length>size){
//     let lastIndex = sentence.lastIndexOf(" ",size)
//     let newSentence = sentence.slice(0,lastIndex)
//     console.log(newSentence);
//     sentence = sentence.slice(lastIndex+1)
// }
// console.log(sentence);
// ###################################################################################################################
// const height = 8
// for (let i = 0; i < height; i++) {
// 	let empty = height - i
// 	let full = i + 1
// 	let display = ""
// 	for (let j = 0; j < empty; j++) {
// 		display += " "
// 	}
// 	for (let k = 0; k < full; k++) {
// 		display += "#"
// 	}

// 	console.log(display)
// }
//###################################################################################################################
// let longSentence =
// 	"Hello, this is my long sentence, please break it up on the display."
// let DISPLAY_SIZE = 12

// while (longSentence.length > DISPLAY_SIZE) {
// 	let lastIndex = longSentence.lastIndexOf(" ", 12)
// 	let newSentence = longSentence.slice(0, lastIndex)
// 	longSentence = longSentence.slice(lastIndex + 1)
// 	console.log(newSentence)
// }
//###################################################################################################################
//1.	Given a string:
//a.	count how many words it contains
// let string1 = "This is an example."
// let string2 =
// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// function countSpace(a) {
// 	if (a.length < 1) {
// 		console.log("There is no string")
// 	}
// 	if (a.length === 1) {
// 		console.log("String is too short")
// 	}
// 	if (a.length > 1) {
// 		let words = 1
// 		for (let i = 0; i < a.length; i++) {
// 			let space = 0
// 			if (a[i] === " ") {
// 				space++
// 				words += space
// 			}
// 		}
// 		console.log("Given string has: " + words + " words")
// 	}
// }
//countSpace(string1)
//countSpace(string2)
//###################################################################################################################
// function countSpace2(a) {
// 	if (a.length < 1) {
// 		console.log("There is no string")
// 	}
// 	if (a.length === 1) {
// 		console.log("String is too short")
// 	}
// 	if (a.length > 1 && a.includes(" ")) {
// 		let arr = a.split(" ")
// 		let count = arr.length
// 		console.log(`Given string has ${count} words`)
// 	}
// }
// countSpace2(string1)
// countSpace2(string2)
//###################################################################################################################
//b.	count how many letter “A”  is in it
// function countA(a) {
// 	let occurenceA = 0
// 	for (let i = 0; i < a.length; i++) {
// 		if (a[i].toLowerCase() === "a") {
// 			occurenceA++
// 		}
// 	}
// 	console.log(`Letter 'a' occur in given string ${occurenceA} times`)
// }
// countA(string1)
// countA(string2)
//###################################################################################################################
// function longestWord(a) {
// 	let arr = a.split(" ")
// 	let longestWord = ""
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i].length > longestWord.length) {
// 			longestWord = arr[i]
// 		}
// 	}
// 	console.log(longestWord)
// }
// longestWord(string1)
// longestWord(string2)
//###################################################################################################################
// function howManyWordsHasTheSameLongest(a) {
// 	let arr = a.split(" ")
// 	let longestWord = ""
// 	let counter = 0
// 	for (const i of arr) {
// 		if (i.length > longestWord.length) {
// 			longestWord = i
// 		}
// 	}
// 	for (const j of arr) {
// 		if (j.length === longestWord.length) {
// 			counter++
// 		}
// 	}
// 	let lengthOfLongestWord = longestWord.length
// 	if (longestWord.endsWith(".")) {
// 		lengthOfLongestWord -= 1
// 	}
// 	console.log(
// 		`Longest word in array is "${longestWord}" and it has ${lengthOfLongestWord} letters, it occurs ${counter} times.`
// 	)
// }
// howManyWordsHasTheSameLongest(string1)
// howManyWordsHasTheSameLongest(string2)
//###################################################################################################################
// SUPER MARIO PIRAMID

// let height = 5
// for (let i = 0; i < height; i++) {
// 	let space = height - i
// 	let hash = i + 1
// 	let output = ""
// 	for (let i = 0; i < space; i++) {
// 		output += " "
// 	}
// 	for (let j = 0; j < hash; j++) {
// 		output += "#"
// 	}
// 	output += " "
// 	for (let k = 0; k < hash; k++) {
// 		output += "#"
// 	}
// 	for (let m = 0; m < space; m++) {
// 		output += " "
// 	}
// 	console.log(output)
// }
//###################################################################################################################
// let string =
//  	"acaagtttgtacaaaaaagcagaagggccgtcaaggcccaccatgcctattggatccaaagagaggccaacattttttgaaatttttaagacacgctgcaacaaagcagatttaggaccaataagtcttaattggtttgaagaactttcttcagaagctccaccctataattctgaacctgcagaagaatctgaacataaaaacaacaattacgaaccaaacctatttaaaactccacaaaggaaaccatcttataatcagctggcttcaactccaataatattcaaagagcaagggctgactctgccgctgtaccaatctcctgtaaaagaattagataaattcaaattagacttaggaaggaatgttcccaatagtagacataaaagtcttcgcacagtgaaaactaaaatggatcaagcagatgatgtttcctgtccacttctaaattcttgtcttagtgaaagtcctgttgttctacaatgtacacatgtaacaccacaaagagataagtcagtggtatgtgggagtttgtttcatacaccaaagtttgtgaagggtcgtcagacaccaaaacatatttctgaaagtctaggagctgaggtggatcctgatatgtcttggtcaagttctttagctacaccacccacccttagttctactgtgctcatagtcagaaatgaagaagcatctgaaactgtatttcctcatgatactactgctaatgtgaaaagctatttttccaatcatgatgaaagtctgaagaaaaatgatagatttatcgcttctgtgacagacagtgaaaacacaaatcaaagagaagctgcaagtcatggatttggaaaaacatcagggaattcatttaaagtaaatagctgcaaagaccacattggaaagtcaatgccaaatgtcctagaagatgaagtatatgaaacagttgtagatacctctgaagaagatagtttttcattatgtttttctaaatgtagaacaaaaaatctacaaaaagtaagaactagcaagactaggaaaaaaattttccatgaagcaaacgctgatgaatgtgaaaaatctaaaaaccaagtgaaagaaaaatactcatttgtatctgaagtggaaccaaatgatactgatccattagattcaaatgtagcaaatcagaagccctttgagagtggaagtgacaaaatctccaaggaagttgtaccgtctttggcctgtgaatggtctcaactaaccctttcaggtctaaatggagcccagatggagaaaatacccctattgcatatttcttcatgtgaccaaaatatttcagaaaaagacctattagacacagagaacaaaagaaagaaagattttcttacttcagagaattctttgccacgtatttctagcctaccaaaatcagagaagccattaaatgaggaaacagtggtaaataagagagatgaagagcagcatcttgaatctcatacagactgcattcttgcagtaaagcaggcaatatctggaacttctccagtggcttcttcatttcagggtatcaaaaagtctatattcagaataagagaatcacctaaagagactttcaatgcaagtttttcaggtcatatgactgatccaaactttaaaaaagaaactgaagcctctgaaagtggactggaaatacatactgtttgctcacagaaggaggactccttatgtccaaatttaattgataatggaagctggccagccaccaccacacagaattctgtagctttgaagaatgcaggtttaatatccactttgaaaaagaaaacaaataagtttatttatgctatacatgatgaaacatcttataaaggaaaaaaaataccgaaagaccaaaaatcagaactaattaactgttcagcccagtttgaagcaaatgcttttgaagcaccacttacatttgcaaatgctgattcaggtttattgcattcttctgtgaaaagaagctgttcacagaatgattctgaagaaccaactttgtccttaactagctcttttgggacaattctgaggaaatgttctagaaatgaaacatgttctaataatacagtaatctctcaggatcttgattataaagaagcaaaatgtaataaggaaaaactacagttatttattaccccagaagctgattctctgtcatgcctgcaggaaggacagtgtgaaaatgatccaaaaagcaaaaaagtttcagatataaaagaagaggtcttggctgcagcatgtcacccagtacaacattcaaaagtggaatacagtgatactgactttcaatcccagaaaagtcttttatatgatcatgaaaatgccagcactcttattttaactcctacttccaaggatgttctgtcaaacctagtcatgatttctagaggcaaagaatcatacaaaatgtcagacaagctcaaaggtaacaattatgaatctgatgttgaattaaccaaaaatattcccatggaaaagaatcaagatgtatgtgctttaaatgaaaattataaaaacgttgagctgttgccacctgaaaaatacatgagagtagcatcaccttcaagaaaggtacaattcaaccaaaacacaaatctaagagtaatccaaaaaaatcaagaagaaactacttcaatttcaaaaataactgtcaatccagactctgaagaacttttctcagacaatgagaataattttgtcttccaagtagctaatgaaaggaataatcttgctttaggaaatactaaggaacttcatgaaacagacttgacttgtgtaaacgaacccattttcaagaactctaccatggttttatatggagacacaggtgataaacaagcaacccaagtgtcaattaaaaaagatttggtttatgttcttgcagaggagaacaaaaatagtgtaaagcagcatataaaaatgactctaggtcaagatttaaaatcggacatctccttgaatatagataaaataccagaaaaaaataatgattacatgaacaaatgggcaggactcttaggtccaatttcaaatcacagttttggaggtagcttcagaacagcttcaaataaggaaatcaagctctctgaacataacattaagaagagcaaaatgttcttcaaagatattgaagaacaatatcctactagtttagcttgtgttgaaattgtaaataccttggcattagataatcaaaagaaactgagcaagcctcagtcaattaatactgtatctgcacatttacagagtagtgtagttgtttctgattgtaaaaatagtcatataacccctcagatgttattttccaagcaggattttaattcaaaccataatttaacacctagccaaaaggcagaaattacagaactttctactatattagaagaatcaggaagtcagtttgaatttactcagtttagaaaaccaagctacatattgcagaagagtacatttgaagtgcctgaaaaccagatgactatcttaaagaccacttctgaggaatgcagagatgctgatcttcatgtcataatgaatgccccatcgattggtcaggtagacagcagcaagcaatttgaaggtacagttgaaattaaacggaagtttgctggcctgttgaaaaatgactgtaacaaaagtgcttctggttatttaacagatgaaaatgaagtggggtttaggggcttttattctgctcatggcacaaaactgaatgtttctactgaagctctgcaaaaagctgtgaaactgtttagtgatattgagaatattagtgaggaaacttctgcagaggtacatccaataagtttatcttcaagtaaatgtcatgattctgttgtttcaatgtttaagatagaaaatcataatgataaaactgtaagtgaaaaaaataataaatgccaactgatattacaaaataatattgaaatgactactggcacttttgttgaagaaattactgaaaattacaagagaaatactgaaaatgaagataacaaatatactgctgccagtagaaattctcataacttagaatttgatggcagtgattcaagtaaaaatgatactgtttgtattcataaagatgaaacggacttgctatttactgatcagcacaacatatgtcttaaattatctggccagtttatgaaggagggaaacactcagattaaagaagatttgtcagatttaacttttttggaagttgcgaaagctcaagaagcatgtcatggtaatacttcaaataaagaacagttaactgctactaaaacggagcaaaatataaaagattttgagacttctgatacattttttcagactgcaagtgggaaaaatattagtgtcgccaaagagtcatttaataaaattgtaaatttctttgatcagaaaccagaagaattgcataacttttccttaaattctgaattacattctgacataagaaagaacaaaatggacattctaagttatgaggaaacagacatagttaaacacaaaatactgaaagaaagtgtcccagttggtactggaaatcaactagtgaccttccagggacaacccgaacgtgatgaaaagatcaaagaacctactctattgggttttcatacagctagcgggaaaaaagttaaaattgcaaaggaatctttggacaaagtgaaaaacctttttgatgaaaaagagcaaggtactagtgaaatcaccagttttagccatcaatgggcaaagaccctaaagtacagagaggcctgtaaagaccttgaattagcatgtgagaccattgagatcacagctgccccaaagtgtaaagaaatgcagaattctctcaataatgataaaaaccttgtttctattgagactgtggtgccacctaagctcttaagtgataatttatgtagacaaactgaaaatctcaaaacatcaaaaagtatctttttgaaagttaaagtacatgaaaatgtagaaaaagaaacagcaaaaagtcctgcaacttgttacacaaatcagtccccttattcagtcattgaaaattcagccttagctttttacacaagttgtagtagaaaaacttctgtgagtcagacttcattacttgaagcaaaaaaatggcttagagaaggaatatttgatggtcaaccagaaagaataaatactgcagattatgtaggaaattatttgtatgaaaataattcaaacagtactatagctgaaaatgacaaaaatcatctctccgaaaaacaagatacttatttaagtaacagtagcatgtctaacagctattcctaccattctgatgaggtatataatgattcaggatatctctcaaaaaataaacttgattctggtattgagccagtattgaagaatgttgaagatcaaaaaaacactagtttttccaaagtaatatccaatgtaaaagatgcaaatgcatacccacaaactgtaaatgaagatatttgcgttgaggaacttgtgactagctcttcaccctgcaaaaataaaaatgcagccattaaattgtccatatctaatagtaataattttgaggtagggccacctgcatttaggatagccagtggtaaaatcgtttgtgtttcacatgaaacaattaaaaaagtgaaagacatatttacagacagtttcagtaaagtaattaaggaaaacaacgagaataaatcaaaaatttgccaaacgaaaattatggcaggttgttacgaggcattggatgattcagaggatattcttcataactctctagataatgatgaatgtagcacgcattcacataaggtttttgctgacattcagagtgaagaaattttacaacataaccaaaatatgtctggattggagaaagtttctaaaatatcaccttgtgatgttagtttggaaacttcagatatatgtaaatgtagtatagggaagcttcataagtcagtctcatctgcaaatacttgtgggatttttagcacagcaagtggaaaatctgtccaggtatcagatgcttcattacaaaacgcaagacaagtgttttctgaaatagaagatagtaccaagcaagtcttttccaaagtattgtttaaaagtaacgaacattcagaccagctcacaagagaagaaaatactgctatacgtactccagaacatttaatatcccaaaaaggcttttcatataatgtggtaaattcatctgctttctctggatttagtacagcaagtggaaagcaagtttccattttagaaagttccttacacaaagttaagggagtgttagaggaatttgatttaatcagaactgagcatagtcttcactattcacctacgtctagacaaaatgtatcaaaaatacttcctcgtgttgataagagaaacccagagcactgtgtaaactcagaaatggaaaaaacctgcagtaaagaatttaaattatcaaataacttaaatgttgaaggtggttcttcagaaaataatcactctattaaagtttctccatatctctctcaatttcaacaagacaaacaacagttggtattaggaaccaaagtgtcacttgttgagaacattcatgttttgggaaaagaacaggcttcacctaaaaacgtaaaaatggaaattggtaaaactgaaactttttctgatgttcctgtgaaaacaaatatagaagtttgttctacttactccaaagattcagaaaactactttgaaacagaagcagtagaaattgctaaagcttttatggaagatgatgaactgacagattctaaactgccaagtcatgccacacattctctttttacatgtcccgaaaatgaggaaatggttttgtcaaattcaagaattggaaaaagaagaggagagccccttatcttagtgggagaaccctcaatcaaaagaaacttattaaatgaatttgacaggataatagaaaatcaagaaaaatccttaaaggcttcaaaaagcactccagatggcacaataaaagatcgaagattgtttatgcatcatgtttctttagagccgattacctgtgtaccctttcgcacaactaaggaacgtcaagagatacagaatccaaattttaccgcacctggtcaagaatttctgtctaaatctcatttgtatgaacatctgactttggaaaaatcttcaagcaatttagcagtttcaggacatccattttatcaagtttctgctacaagaaatgaaaaaatgagacacttgattactacaggcagaccaaccaaagtctttgttccaccttttaaaactaaatcacattttcacagagttgaacagtgtgttaggaatattaacttggaggaaaacagacaaaagcaaaacattgatggacatggctctgatgatagtaaaaataagattaatgacaatgagattcatcagtttaacaaaaacaactccaatcaagcagcagctgtaactttcacaaagtgtgaagaagaacctttagatttaattacaagtcttcagaatgccagagatatacaggatatgcgaattaagaagaaacaaaggcaacgcgtctttccacagccaggcagtctgtatcttgcaaaaacatccactctgcctcgaatctctctgaaagcagcagtaggaggccaagttccctctgcgtgttctcataaacagctgtatacgtatggcgtttctaaacattgcataaaaattaacagcaaaaatgcagagtcttttcagtttcacactgaagattattttggtaaggaaagtttatggactggaaaaggaatacagttggctgatggtggatggctcataccctccaatgatggaaaggctggaaaagaagaattttatagggctctgtgtgacactccaggtgtggatccaaagcttatttctagaatttgggtttataatcactatagatggatcatatggaaactggcagctatggaatgtgcctttcctaaggaatttgctaatagatgcctaagcccagaaagggtgcttcttcaactaaaatacagatatgatacggaaattgatagaagcagaagatcggctataaaaaagataatggaaagggatgacacagctgcaaaaacacttgttctctgtgtttctgacataatttcattgagcgcaaatatatctgaaacttctagcaataaaactagtagtgcagatacccaaaaagtggccattattgaacttacagatgggtggtatgctgttaaggcccagttagatcctcccctcttagctgtcttaaagaatggcagactgacagttggtcagaagattattcttcatggagcagaactggtgggctctcctgatgcctgtacacctcttgaagccccagaatctcttatgttaaagatttctgctaacagtactcggcctgctcgctggtataccaaacttggattctttcctgaccctagaccttttcctctgcccttatcatcgcttttcagtgatggaggaaatgttggttgtgttgatgtaattattcaaagagcataccctatacagtggatggagaagacatcatctggattatacatatttcgcaatgaaagagaggaagaaaaggaagcagcaaaatatgtggaggcccaacaaaagagactagaagccttattcactaaaattcaggaggaatttgaagaacatgaagaaaacacaacaaaaccatatttaccatcacgtgcactaacaagacagcaagttcgtgctttgcaagatggtgcagagctttatgaagcagtgaagaatgcagcagacccagcttaccttgagggttatttcagtgaagagcagttaagagccttgaataatcacaggcaaatgttgaatgataagaaacaagctcagatccagttggaaattaggaaggccatggaatctgctgaacaaaaggaacaaggtttatcaagggatgtcacaaccgtgtggaagttgcgtattgtaagctattcaaaaaaagaaaaagattcagttatactgagtatttggcgtccatcatcagatttatattctctgttaacagaaggaaagagatacagaatttatcatcttgcaacttcaaaatctaaaagtaaatctgaaagagctaacatacagttagcagcgacaaaaaaaactcagtatcaacaactaccggtttcagatgaaattttatttcagatttaccagccacgggagccccttcacttcagcaaatttttagatccagactttcagccatcttgttctgaggtggacctaataggatttgtcgtttctgttgtgaaaaaaacaggacttgcccctttcgtctatttgtcagacgaatgttacaatttactggcaataaagttttggatagaccttaatgaggacattattaagcctcatatgttaattgctgcaagcaacctccagtggcgaccagaatccaaatcaggccttcttactttatttgctggagatttttctgtgttttctgctagtccaaaagagggccactttcaagagacattcaacaaaatgaaaaatactgttgagaatattgacatactttgcaatgaagcagaaaacaagcttatgcatatactgcatgcaaatgatcccaagtggtccaccccaactaaagactgtacttcagggccgtacactgctcaaatcattcctggtacaggaaacaagcttctgatgtcttctcctaattgtgagatatattatcaaagtcctttatcactttgtatggccaaaaggaagtctgtttccacacctgtctcagcccagatgacttcaaagtcttgtaaaggggagaaagagattgatgaccaaaagaactgcaaaaagagaagagccttggatttcttgagtagactgcctttacctccacctgttagtcccatttgtacatttgtttctccggctgcacagaaggcatttcagccaccaaggagttgtggcaccaaatacgaaacacccataaagaaaaaagaactgaattctcctcagatgactccatttaaaaaattcaatgaaatttctcttttggaaagtaattcaatagctgacgaagaacttgcattgataaatacccaagctcttttgtctggttcaacaggagaaaaacaatttatatctgtcagtgaatccactaggactgctcccaccagttcagaagattatctcagactgaaacgacgttgtactacatctctgatcaaagaacaggagagttcccaggccagtacggaagaatgtgagaaaaataagcaggacacaattacaactaaaaaatatatctagggcctcatgggcccagctttcttgtacaaagtggt"

// let atg = "atg"
// let taa = "taa"
// let atgIndex = string.indexOf(atg) //zwraca indeks pierwszej litery "a" stringa "atg" w całym stringu
// let taaIndex = string.indexOf(taa) //zwraca indeks pierwszej litery "t" stringa "taa" w całym stringu
// let codonLength = 3 //ilośc liter codonu "atg", "taa"
// let countCodon = 0 //licznik wystapień
// let stringCodon = ""
// let shortest = ""
// let longest = ""
// while (string.length) {
// 	//dopóki wystepuje długość indeksu inna niż 0 to true
// 	atgIndex = string.indexOf(atg)
// 	taaIndex = string.indexOf(taa)
// 	if (
// 		(taaIndex - (atgIndex + codonLength)) % 3 === 0 &&
// 		taaIndex - (atgIndex + codonLength) >= 3
// 	) {
// 		countCodon++
// 		stringCodon += string.slice(atgIndex, taaIndex + codonLength) + " "
// 	}
// 	string = string.slice(taaIndex + codonLength)

// 	while (stringCodon.length > 0) {
// 		let index = stringCodon.indexOf(" ")
// 		let codom = stringCodon.slice(0, index)
// 		if (codom.length > longest.length) {
// 			longest = codom
// 		}
// 		if (codom.length < stringCodon.length) {
// 			shortest = codom
// 		}
// 		stringCodon = stringCodon.slice(index + 1)
// 	}
// }
// console.log(
// 	`Longest dna is: \n"${longest}"\nand its length is: ${longest.length}`
// )
// console.log(
// 	`Shortest dna is: \n"${shortest}"\nand its length is ${shortest.length}`
// )
// console.log(`Number of genes is: ${countCodon}`)

// ###################################################################################################################
// CREDIT CARD

// let number = "4782765601169000"
// let dropNumber = Number(number.slice(-1))
// let numberWithoutLastDigit = number.slice(0, number.length - 1)
// let lengthOfWithouDigit = numberWithoutLastDigit.length
// let checkDigit = ""
// for (let i = lengthOfWithouDigit - 1; i >= 0; i--) {
// 	if (i % 2 === 1) {
// 		checkDigit += numberWithoutLastDigit[i] * 2 + " "
// 	}
// 	if (i % 2 === 0) {
// 		checkDigit += numberWithoutLastDigit[i] + " "
// 	}
// }
// let sum = 0
// while (checkDigit.length) {
// 	let index = checkDigit.indexOf(" ")
// 	let num = checkDigit.slice(0, index)
// 	if (num.length > 1) {
// 		sum += Number(num[0]) + Number(num[1])
// 	}
// 	if (num.length === 1) {
// 		sum += Number(num[0])
// 	}
// 	checkDigit = checkDigit.slice(index + 1)
// }
// i.	All American Express numbers start with 34 or 37;
// ii.	MasterCard numbers start with 51, 52, 53, 54, or 55;
// iii.	All Visa numbers start with 4
// iv.	American Express uses 15-digit numbers
// v.	MasterCard uses 16-digit numbers
// vi.	Visa uses 13- and 16-digit numbers
// function checkCardSupplier(number) {
// 	if (
// 		(number.startsWith(34) || number.startsWith(37)) &&
// 		number.length === 15
// 	) {
// 		console.log(`It is All American Express`)
// 	}
// 	if (
// 		(number.startsWith(51) ||
// 			number.startsWith(52) ||
// 			number.startsWith(53) ||
// 			number.startsWith(54) ||
// 			number.startsWith(55)) &&
// 		number.length === 16
// 	) {
// 		console.log(`It is Mastercard`)
// 	}
// 	if (number.startsWith(4) && (number.length === 13 || number.length === 16)) {
// 		console.log(`It is Visa`)
// 	}
// }
// function checkValid() {
// 	let moduloDigit = (10 - (sum % 10)) % 10
// 	if (dropNumber === moduloDigit) {
// 		console.log(`Card number ${number} is VALID`)
// 	} else {
// 		console.log(`Card number ${number} is NOT VALID`)
// 	}
// }

// checkValid()
// checkCardSupplier(number)

// function average(tab) {
// 	return tab.reduce((a, b) => a + b, 0) / tab.length
// }
// console.log(average([2, 3, 2, 3, 10]))

// function day() {
// 	let day = new Date()
// 	console.log(`Topday is ${day.toLocaleDateString("en-us")}`)
// }
// day()
//ŚREDNIA Z DWÓCH LICZB
// let max = 100
// let min = 50
// let random = Math.floor(Math.random() * (max + 1 - min) + min)
// console.log(random)
//FACTORIAL
// function fac(number) {
// 	if (number === 0 || number=== 1) {
// 		return 1
// 	}
// 	return number * fac(number - 1)
// }

// console.log(fac(6))


