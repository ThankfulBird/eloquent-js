// Using use strict makes JScript less error prone and detecting errors easier
'use strict'
//x = 12
// Constructors created in class notation will always give error
// When they are not created by new keyword
function Person(name) {this.name = name}
let aPerson = Person('John')
//aPerson.name
// JScript basically has no type control system
// Using TypeScript is a good choice
