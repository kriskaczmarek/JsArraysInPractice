//FACTORIAL
// function factorial(num){
//     if(num===0||num===1){
//         return 1
//     }else{
//         return num*fact(num-1)
//     }
// }
// console.log(factorial(5));
//FIBONACCI
// function fibo(n) {
// 	if (n === 0) {
// 		return 0
// 	}
// 	if (n === 1) {
// 		return 1
// 	}
// 	return fibo(n - 1) + fibo(n - 2)
// }
// console.log(fibo(9))
//FIBONACCI 2
// function fibo2(n) {
// 	let n1 = 0
// 	let n2 = 1
// 	let next
// 	for (let i = 1; i < n; i++) {
// 		console.log(n1)
// 		next = n1 + n2
// 		n1 = n2
// 		n2 = next
// 	}
// }
// fibo2(8)
//COLLATZ
// function collatz(n) {
// 	if (n === 1) {
// 		return 1
// 	} else {
// 		if (n % 2 === 0) {
// 			console.log(n)
// 			return 1 + collatz(n / 2)
// 		}
// 		if (n % 2 !== 0) {
// 			console.log(n)
// 			return 1 + collatz(3 * n + 1)
// 		}
// 	}
// }
// collatz(5)
//Exercise 1b
//const array = [1, 6, 23, 8, 4, 8, 3, 7]
// function sumElements(arr) {
// 	let a = 0
// 	for (const b of arr) {
// 		a += b
// 	}
// 	return a
// }
// console.log(sumElements(array))
//Exercise 1c
// function sumfirstandlast(arr) {
// 	if (arr.length === 1) {
// 		return arr[0]
// 	}
// 	if (arr.length === 2) {
// 		return arr[0] + arr[1]
// 	} else {
// 		return arr[0] + arr[arr.length - 1]
// 	}
// }
// console.log(sumfirstandlast(array))
//Exercise 1d
// function d(a){
// 	const r = []
// 	for (let i=a.length-1;i>=0;i--){
// 		r.push(a[i])
// 	}
// 	return r

// }
// console.log(d(array))
//Exercise 1e
// function r(arr, attempts) {
// 	let newArr = []
// 	for (let i = 0; i < attempts - 1; i++) {
// 		const n = Math.floor(Math.random() * (attempts  - i) + i)
// 		newArr[i] = arr[n]
// 	}
// 	console.log(newArr)
// 	for (let j=0;j<newArr.length;j++){
// 		if(newArr[j]>newArr[j+1]){
// 			let c = newArr[j]
// 			newArr[j] = newArr[j+1]
// 			newArr[j+1] = c
// 		}
// 	}
// 	return console.log(newArr[0]);
// }
// r([1,6,23,8,4,8,3,7],4)
//Exercise 1f

// function a(b) {
// 	let arr = [...b]
// 	let newArr = []
// 	for (let i=arr.length;i>0;i--){
// 		let index = Math.floor(Math.random()*i)
// 		newArr.push(arr.splice(index,1))
// 	}
// 	return newArr.flat()
// }
// console.log(a([2, 4, 6, 8]))

// function tillFriday() {
// 	const d = new Date().getDay()
// 	if (d <= 5 && d > 0) {
// 		console.log(5-d)
// 	}
// 	if (d>5){console.log(7)}
// }
// tillFriday()
// let alphabet = []
// for (let i = 0; i < 26; i++) {
// 		alphabet.push(String.fromCharCode(65 + i).toLowerCase())
// }

// function change(text,key){
// 	if (alphabet.includes(text) === false){
// 		return text
// 	}
// }

// function ceasar(string, number) {

// 	let cesar = []

// }
// console.log(ceasar("abcde abcdef", 3))
//EXERCISE 4
// function fibo(n) {
// 	if (n === 0) {
// 		return 0
// 	} else if (n === 1) {
// 		return 1
// 	} else {
// 		return fibo(n - 1) + fibo(n - 2)
// 	}
// }
// let m = 10
// for (let i = 0; i < m; i++) {
// 	console.log(fibo(i) + " ")
// }
//EXERCISE 5a
//PRIME NUMBERS
// function isPrime(n) {
// 	if (n === 0 || n === 1) {
// 		return false
// 	}
// 	for (let i = 2; i <= Math.sqrt(n); i++) {
// 		if (n % i === 0) {
// 			return false
// 		}
// 	}
// 	return true
// }
// console.log(isPrime(4))

// function getPrime(n){
// 	let res = []
// 	for (let i=2;res.length<n;i++){
// 		if (isPrime(i)){
// 			res.push(i)
// 		}
// 	}
// 	return res
// }
// console.log(getPrime(10));

//EXERCISE 6
//Binary Search (This algorithm assumes that the array is sorted)
// function binSearch(arr, target) {
// 	let index = Math.floor(arr.length / 2)
// 	let currentValue = arr[index]
// 	if (currentValue === target) {
// 		return "found " + currentValue
// 	}
// 	if (arr.length === 0 || arr.length === 1) {
// 		return "not found"
// 	}
// 	if (currentValue > target) {
// 		return binSearch(arr.slice(0, currentValue), target)
// 	}
// 	if (currentValue < target) {
// 		return binSearch(arr.slice(currentValue + 1), target)
// 	}
// }
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(binSearch(arr, 3))

//EXERCISE 7
//   function sortBySelection(arrayOfNumbers) {
// function sortBySelection(arr) {
// 	for (let i=0;i<arr.length-1;i++){
// 		let smallest = arr[i]
// 		let smallestIndex = i
// 		for (let j=i+1;j<arr.length;j++){
// 			if (arr[j]<smallest){
// 				smallest = arr[j]
// 				smallestIndex = j
// 			}
// 		}
// 		let copy = arr[i]
// 		arr[i] = arr[smallestIndex]
// 		arr[smallestIndex] = copy
// 	}
// 	return arr
// }

// let exampleArray = [6, 2, 7, 3, 6, 8, 10, 2];
// sortBySelection(exampleArray);
// console.log(exampleArray);

//EXERCISE 8
// function sortMerge(arr) {
// 	if (arr.length <= 1) {
// 		return arr
// 	}
// 	let halfIndex = Math.floor(arr.length / 2)
// 	let left = arr.splice(0, halfIndex)
// 	let rigth = arr

// 	return merge(sortMerge(left), sortMerge(rigth))
// }
// function merge(left, rigth) {
// 	let newArr = []
// 	while (left.length > 0 || rigth.length > 0) {
// 		let smallerElement
// 		if (left.length === 0) {
// 			smallerElement = rigth.shift()
// 		} else if (rigth.length === 0) {
// 			smallerElement = left.shift()
// 		} else if (left[0] < rigth[0]) {
// 			smallerElement = left.shift()
// 		} else {
// 			smallerElement = rigth.shift()
// 		}
// 		newArr.push(smallerElement)
// 	}
// 	return newArr
// }

// let exampleArray = [6, 2, 7, 3, 6, 8, 10, 2]
// let sortedArray = sortMerge(exampleArray)
// console.log(sortedArray)
