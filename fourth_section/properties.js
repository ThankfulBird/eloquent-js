// null and undefined have no properties
// We can access properties via dot and bracket
// Difference is dot takes literaly the value
// Whereas bracket first evaluates the expression
// For properties without valid binding names use brackets
let obj = {
	water: 'blue',
	grass: 'green'
};

let water = 'grass';
console.log(obj[water]);
console.log(obj.water);