let hexBinaryPattern = /\b([01]+b|[\da-f]+h|\d+)\b/
console.log(hexBinaryPattern.exec('011101h'))
// dot means whole part
console.log(/^.*/.exec('Hello World!'))
console.log(/^.*x/.exec('abcxe'))
// Use regex wisely
// Code below basically works
// But it takes a lot of time
// Because of backtracking
let laziestBinaryPattern = /([01]+)+b/