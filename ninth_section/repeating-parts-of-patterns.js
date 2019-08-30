// + means one or more times
// * means zero or more times
console.log(/\$\d+/.test('$123'))
console.log(/\$\d+/.test('$'))
console.log(/\$\d*/.test('$123'))
console.log(/\$\d*/.test('$'))
// ? means it can be occur or not
// Example: /u?/ u can occur in text or not
// Zero times or one times
console.log(/Colou?r/.test('Color'))
console.log(/Colou?r/.test('Colour'))
console.log(/Colou?r/.test('Colouur'))
// To indicate number of times we can use {} brackets
// {N} means it occurs exactly N times
// {A,B} means it happens a number of times between A and B(Explicit)
let datePattern = /\d{1,2}-\d{1,2}-\d{0,4}/
console.log(datePattern.test('2-10-1992'))
console.log(datePattern.test('23-6-45'))
// We can also specify ranges with open ends
// Like {N,} means at least N times or more
let namePattern = /^[a-z]{5,}/
console.log(namePattern.test('edward'))
console.log(namePattern.test('john'))