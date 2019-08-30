let anObject = {class: '@{Object}', property: 'ordinary'}
console.log(anObject.class)
console.log(anObject.state)
anObject.state = 'idle'
console.log(anObject.state)
// Delete unary operator used to delete a key-value pair of an object
// Generally it removes a property and its value
delete anObject.property
console.log(anObject.property)
// How to print properties of an object
// in operator used to find whether a key in an object 
console.log('class' in anObject)
console.log('delete' in anObject)
console.log('length' in String)
// Arrays are objects too
let anArray = [1, 2, 3, 4]
delete anArray[2]
console.log(anArray)
// Clearing an array can be done with filtering
// Filter function takes a boolean function and filters array using this function
let filteredArray = anArray.filter((element) => {
    // This works because of the falsy values 
    // undefined, '', 0, null, NaN all are falsy
    return element
})
console.log(filteredArray)
// Getting object properties and their values
let objectProperties = Object.keys(anObject)
console.log(objectProperties)
let propertyValues = objectProperties.map((element) => {
    return anObject[element]
})
console.log(propertyValues)
// Copying an object into another using Object.assign (same properties are overwritten)
console.log(anObject)
Object.assign(anObject, {property: 'mediocre', state: 'active'})
console.log(anObject)
// We can put objects inside arrays and vice versa
anObject['hashCodes'] = [1, 34, 8];
console.log(anObject)
anArray = filteredArray
anArray.push({type: 'Array', size: anArray.length})
console.log(anArray)