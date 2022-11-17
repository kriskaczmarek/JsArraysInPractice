// const character = require("./character.json")
// const episode = require("./episodes.json")
// const locations = require("./locations.json")

// // function sumAllCharacters(){
// //     const result = character.reduce((sum,currentChar)=>{
// //         if(currentChar.status === "Dead"){
// //             return sum+1
// //         }
// //         return sum
// //     },0)
// //     return result
// // }
// // console.log(sumAllCharacters)

// function mapAllCharactersOnEarth() {
// 	const result = character
// 		.filter(a => a.origin.name.includes("Earth"))
// 		.sort((a, b) => {
// 			if (a.name < b.name) {
// 				return 1
// 			}
// 			if (a.name > b.name) {
// 				return -1
// 			}
// 			if (a.name === b.name) {
// 				return 0
// 			}
// 		})
// 	return result
// }
// mapAllCharactersOnEarth()

const array = ["J", "U", "S", "T", "J", "O", "I", "N", ".", "I", "T"]
const n = array.reduce((a, b,c) => {
    if(c%2!==0){
        return a+b.toLowerCase()
    } else {
        return a+b
    }
},'')
console.log(n)
