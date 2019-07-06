console.log(null == undefined);
console.log(null == 0);
let first_variable;
console.log((first_variable == null) ? 'Item is not initialised.':
	'Item is initialised.');
let second_variable = 'orange';
console.log((second_variable == null) ? 'Item is not initialised.':
	`Item is initialised. Value: [${second_variable}].`);
console.log(`'5' == 5 -> ${'5' == 5}.`);
console.log(`'5' === 5 -> ${'5' === 5}.`);