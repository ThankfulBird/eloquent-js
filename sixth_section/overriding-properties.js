function Car(name) {
    this.name = name
}

Car.prototype.engine = 'V8'
Car.prototype.giveInfo = function() {
    console.log(`${this.name} engine: ${this.engine}.`)
}
let ferrari = new Car('Ferrari')
ferrari.giveInfo()
Car.prototype.giveInfo()
// toString method for example overridden for Array
console.log(Array.prototype.toString === Object.prototype.toString)
console.log([1, 2].toString())
console.log(Object.prototype.toString.call([1, 2]))