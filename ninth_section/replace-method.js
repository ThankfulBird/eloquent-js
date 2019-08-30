console.log('papa'.replace('p', 'm'))
console.log('Ejjatjallajökull'.replace(/[ea]/, 'u'))
// g option finds all occurences
console.log('Ejjatjallajökull'.replace(/[ea]/g, 'u'))
// To refer groups we use $N where shows Nth group to refer whole matched string use $&
console.log('Liskov, Barbara\nMcCarthy, John\nWadler, Philip'.replace(/(\w+), (\w+)/g, '$2 $1'))
let s = 'the muse and slipknot'
console.log(s.replace(/\b(muse|slipknot)\b/g, str => str.toUpperCase()))