function getYear(string) {
    let year = /(\d{4})/.exec(string)
    return year[0]
}
// Oops! Problem because of boundries
console.log(getYear('23422'))
// ^ used for starting
console.log(/^\?\w+/.exec('?What is ?that'))
// Controls if given string is full of numbers
console.log(/^\d+$/.exec('1252314'))
function isNumerical(string) {
    return /^\d+$/.test('1252314')
}

console.log(!isNaN('123'))
console.log(isNumerical('123'))
let unmatchablePattern = /x^/
// \b used to put a boundry
console.log(/cat/.test('concatenate'))
console.log(/\bcat\b/.test('concatenate'))
// So lets repair getYear function
function getYear(string) {
    let year = /(\d+\b)/.exec(string)
    return year[0]
}
console.log(getYear('23422'))