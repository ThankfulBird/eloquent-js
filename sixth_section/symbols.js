// Property names can be strings or symbols
// Newly created symbols are unique you cant create same symbol again
let sym = Symbol('name')
console.log(sym === Symbol('name'))
class User {
    constructor() {

    }
}

User.prototype[sym] = 23
let aUser = new User();
console.log(aUser[sym])
// So we can use symbols safely without any concerns about other part of interfaces
const toStringSymbol = Symbol('toSymbol')
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`
}
console.log([1, 2].toString())
console.log([1, 2][toStringSymbol]())
// We can use symbols in objects and classes using brackets
let stringObject = {
    [toStringSymbol]() {return 'a jute rope'}
}
console.log(stringObject[toStringSymbol]())