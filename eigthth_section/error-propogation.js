// Basically returning a function to a falsy value
// To show that input is in wrong format
// null undefined and -1 are popular falsy values
let globalNumber

function storeNumber(number) {
    if (!Number.isInteger(number)) return undefined
    globalNumber = number
}

storeNumber(`What's that?`)
console.log(globalNumber)
storeNumber(859)
console.log(globalNumber)

function findRemainder(number, base) {
    if (number < 0) return {failed: true}
    return number % base
}

console.log(findRemainder(-23, 8))