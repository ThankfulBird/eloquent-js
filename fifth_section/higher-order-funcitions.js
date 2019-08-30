// This topic is highly related to closures

function chooseMeal(drink) {
    let object = {}
    return mainFood => {
        object.mainFood = mainFood
        object.drink = drink
        return object
    }
}

let chooseMainFood = chooseMeal('tea')
console.log(chooseMainFood('french toast'))

// Function creates new functions
function lessThan(b) {
    return a => a < b
}

let lessThanSeven = lessThan(7)
console.log(lessThanSeven(5))

// Function changes other function
function chooseOne(f) {
    return (...args) => {
        let result = f(args)
        console.log(result)
    }
}

chooseOne(arr => arr[0])(5, 6, 7)

// Function creates a new type of control flow
function unless(test, then) {
    if (!test) then()
}

unless(2 < 1, () => console.log('New control flow mate!'))

// JS provides a built-in array method for foreach loop (Remember for(let e of arr))
let anArray = ['Tree', 'Blossom', 'Water']
anArray.forEach(value => console.log(value))

// Array filtering
function filter(array, test) {
    let passed = []
    for (let element of array) {
        if (test(element)) {
            passed.push(element)
        }
    }
    return passed
}

console.log(filter(anArray, unit => unit.includes('e')))
// Builtin method filter for array objects
console.log(anArray.filter(val => val.includes('e')))

// Mapping an array
function map(array, transform) {
    let mapped = []
    for (let element of array) {
        mapped.push(transform(element))
    }
    return mapped
}

let numberArray = [1, 2, 3, 4]
console.log(map(numberArray, number => number * number))
console.log(numberArray.map(val => val * val))

// Reducing an array
function reduce(array, combine, start) {
    let current = start
    for (let element of array) {
        current = combine(current, element)
    }
    return current
}

console.log(reduce(numberArray, (a, b) => a + b, 0))
// Builtin array method
// Without no initial value it becomes zero and all a + b pair added to it
// .reduce() is an easy way to generate a single value or object from an array.
console.log(numberArray.reduce((a, b) => a + b))

// Array method some() controls array and returns true if any of values satisfy the condition
console.log(numberArray.some((value) => value > 3))
console.log(numberArray.some((value) => value > 5))

// Code units for characters
let horseShoe = "🐴👟";
console.log(horseShoe.length)
console.log(horseShoe[0])
console.log(horseShoe.charCodeAt(0)) // Code for half character
console.log(horseShoe.codePointAt(0)) // Code for horse emoji
let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}