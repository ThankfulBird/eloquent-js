console.log(/🍎{3}/.test('🍎🍎🍎'))
console.log(/<.>/.test("<🌹>"))
console.log(/<.>/u.test("<🌹>"))
// You can use the \p{Property=Value} notation to match any
// character that has the given value for that property
console.log(/\p{Script=Greek}/u.test("α"))
console.log(/\p{Script=Arabic}/u.test("α"))
console.log(/\p{Alphabetic}/u.test("α"))
console.log(/\p{Alphabetic}/u.test("!"))