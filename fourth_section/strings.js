let person = 'John'
person.age = 34
//Ooopss!?
console.log(person.age)
// Booleans, Numbers and Strings are not objects
// Language doesnt complain about adding them new properties
// But this method is of no effect
// One can ask then how 'John'.length works well look below
person = new String('John')
person.age = 34
console.log(person.age)
// It works because js compiles automatically
// primitive strings to string objects
// Above we make this operation explicitly
// However its generally implicit
// Some useful string methods
let message = 'Ms. Coconut is not home'
console.log(message.indexOf('Coc'))
console.log(message.lastIndexOf('t'))
console.log('  \tHello World\n  '.trim())
console.log(String(6).padStart(3, '0'))
console.log('LA'.repeat(3))
// A little challenge how to print a string as formatted
let aString = [1, 2, 3, 4]
let formattedString = ''
for (let element of aString) {
    formattedString += element + ' '
}
formattedString = formattedString.trim().split(' ')
formattedString = formattedString.join(', ')
formattedString = '[' + formattedString + ']'
console.log(formattedString)