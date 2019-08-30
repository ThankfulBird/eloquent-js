// exec method is more sophisticated way
// to see info about match
let match = /\d+/.exec('Hello 2020!')
console.log(match)
// We can reach index input and groups by simply using match object
// However to reach the match string we have to use code below
// or match[0]
/*console.log(match.filter((value) => {
    return !(value instanceof Object)
}))*/
console.log(match[0])
// String values have a match method which behave in the same way
console.log('Hello 2020!'.match(/\d+/))
// Groups
let quotedTest = /'[^']*'/
// If group with question mark not included output value undefined for it
console.log(quotedTest.exec("Quoth he 'Bloody day!'"))
console.log(/bad(ly)?/.exec('bad'))
// When a group is matched multiple times, only the last match ends up in the array
console.log(/(\d)+/.exec("12352"))