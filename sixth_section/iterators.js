// An object given to for loop expected to be an iterable
// For that it must contain a method named with Symbol.iterator predefined symbol
// The method must return to an iterator object which iterates over the object
// Iterator has a next method that returns the next result and a boolean done
let stringIterator = 'OK'[Symbol.iterator]()
console.log(stringIterator.next())
console.log(stringIterator.next())
console.log(stringIterator.next())
// Implementing an iterable for CharArray
class CharArray {
    constructor(string) {
        this.string = string
    }
}

class CharArrayIterator {
    constructor(string = '', length = 0,  index = 0) {
        this.string = string
        this.index = index
        this.length = length
    }

    next() {
        if (this.index === this.length) return {done: true}
        let value = {currentChar: this.string[this.index], index: this.index}
        this.index++
        return {value, done: false}
    }
}

CharArray.prototype[Symbol.iterator] = function() {
    return new CharArrayIterator(this.string, this.string.length)
}

let aCharArray = new CharArray('Abyss')
for (let char of aCharArray) {
    console.log(char)
}

let varyingSize = {
    get size() {
      return Math.floor(Math.random() * 100);
    }
  };

console.log(varyingSize.size)

class Goldsmith {
    constructor(weight, unitPrice) {
        this.weight = weight
        this.unitPrice = unitPrice
    }

    get totalPrice() {
        return this.weight * this.unitPrice
    }

    set UnitPrice(value) {
        this.unitPrice = value
    }

    static showDominantCurrency() {
        return '€'
    }
}

let myGoldsmith = new Goldsmith(20, 1.2)
console.log(myGoldsmith.totalPrice)
myGoldsmith.unitPrice = 1.7
console.log(myGoldsmith.totalPrice)
console.log(Goldsmith.showDominantCurrency())