let pattern = /zz/g
pattern.lastIndex = 3
let match = pattern.exec('xyyxzz')
console.log(match.index)
console.log(pattern.lastIndex)
let global = /abc/g
console.log(global.exec('xyz abc'))
let sticky = /abc/y
console.log(sticky.exec('xyz abc'))
// Shared lastIndex causes some problems Beware!
let digit = /\d/g
console.log(digit.exec('here it is: 1'))
console.log(digit.exec('and now: 1'))
// To tackle with the problem we need to change lastIndex prop.
digit.lastIndex = 0
console.log(digit.exec('and now: 1'))
// Another side effect of global (g) 
console.log('Banana'.match(/an/g))