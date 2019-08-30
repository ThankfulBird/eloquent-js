function awkwardFunction([firstNumber, secondNumber, thirdNumber]) {
    return firstNumber + secondNumber - thirdNumber
}

let anArray = [2, 4, 5]
console.log(awkwardFunction(anArray))
// It can be applied to objects though
let anObject = {name: 'John', age: 23}
let {name} = anObject
console.log(name)
// For null and undefined destructuring gives
// error as well as reaching property of those ones
// let {nullValue} = null
// let [undefinedValue] = undefined
