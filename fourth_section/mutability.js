let cat = 'scottish fold'
cat[1] = 't'
console.log(cat)
// Numbers, Strings and Booleans are immutable
// Changing variable value doesnt count
let boolean = true
boolean = false
console.log(boolean)
// Binding objects
let obj1 = {value: 10}
let obj2 = obj1
let obj3 = {value: 10}
// == operator for object compares them by identity
console.log(obj1 == obj2)
console.log(obj1 == obj3)
obj1.value = 15
console.log(obj2)
console.log(obj3)
const dwellings = {home: 7, hotel: 2}
// Allowed to change properties but not variable itself
dwellings.hotel = 4
console.log(dwellings);
// Arrays have an includes method self-explanatory
let anArray = ['hello', 3, false, undefined]
if (anArray.includes('hello')) console.log('Thanks mate!')

