// Primitive map design
let ages = {
    Jack: 39,
    Sarah: 22,
    Thomas: 47
}

console.log(`Sarah is ${ages['Sarah']}`)
console.log('Is Jack\'s age known?', 'Jack' in ages)
console.log('Is toString method defined in ages?', 'toString' in ages)
// Dangereous since we didnt list anybody named as toString
// To avoid this problem we can use Object.create method
console.log('toString' in Object.create(null))
// In map structure object property names must be strings 
// Javascript has a class called Map that is written for this exact purpose
ages = new Map()
ages.set('Jack', 39)
ages.set('Sarah', 22)
ages.set('Thomas', 47)
console.log(`Sarah is ${ages.get('Sarah')}`)
console.log(`Is Jack's age known?`, ages.has('Jack'))
console.log('Is toString method defined in ages?', ages.has('toString'))
// delete(key), remove(), set(key, value) also useful methods in Map interface
// If you want to create your own map interface
// 1-Object.keys only shows object properties not prototype properties
// 2-Use hasOwnProperty instead of in operator since it denies prototype properties
console.log({x: 1}.hasOwnProperty('x'))
console.log({x: 1}.hasOwnProperty('toString'))