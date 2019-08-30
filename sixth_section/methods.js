let angryHuman = {trait: 'wrathful'}
angryHuman.greet = function () {
    console.log('Greetings, stranger!')
}
function introduce() {
    console.log(`Human is ${this.trait}.`)
}
angryHuman.introduce = introduce
angryHuman.greet()
angryHuman.introduce()
let kindHuman = {trait: 'kind', introduce}
kindHuman.introduce()
// Another way to use method in object is to use call method for function
function eat(food) {
    console.log(`${this.name} eats ${food}.`)
}
let hungryHuman = {name: 'John', eat}
eat.call(hungryHuman, 'meat')
// Arrow functions are not suspended to an object they are free
/**
 * As an example
 * let object = {
 * f: () => {
 *      console.log(`${this.property}`)}} 
 * object.f() // prints undefined
 */
// Yet they have a beautiful benefit as we can call this in them without using an object
function normalise() {
    console.log(this.coords.map(n => n / this.length))
}
normalise.call({coords: [0, 2, 3], length: 5})
