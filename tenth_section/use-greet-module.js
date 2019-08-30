// Destructuring is very convenient 
// when creating bindings for imported interfaces.
const {greetUser} = require('./greet')
greetUser('Harry')
// Another way
const greet = require('./greet')
greet.greetUser('Edward')