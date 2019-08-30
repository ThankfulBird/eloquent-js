let empty = {}
console.log(empty.toString)
console.log(empty.toString())
console.log(Object.getPrototypeOf({}) === Object.prototype)
// Object has no prototype
console.log(Object.getPrototypeOf(Object.prototype))
console.log(Object.prototype.prototype)
// Functions derive from Function.prototype
// Arrays derive from Array.prototype
console.log(Object.getPrototypeOf(Math.max) === Function.prototype)
console.log(Object.getPrototypeOf([]) === Array.prototype)
// Object.create can be used to create an object with a specific prototype
let protoSheep = {
    eat(greens) {
        console.log(`${this.color} sheep eats ${greens}.`)
    }
}
let darkSheep = Object.create(protoSheep)
darkSheep.color = 'Dark'
darkSheep.eat('grass')
// Another way to create a subobject
function makeSheep(color) {
    let sheep = Object.create(protoSheep)
    sheep.color = color
    return sheep
}
// We can use new key to make a function constructor and use this keyword to bind properties to the object
// Same as above function
function Sheep(color) {
    this.color = color
}

Sheep.prototype.speak = function(line) {
    console.log(`The ${this.color} sheep says '${line}.`)
}
let weirdSheep = new Sheep('red')
console.log(Object.getPrototypeOf(Sheep) === Function.prototype)
console.log(Object.getPrototypeOf(weirdSheep) === Sheep.prototype)