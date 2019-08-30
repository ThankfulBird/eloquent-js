function minus(a, b) {
	if (b === undefined) return -a;
	return a - b;
}

console.log(minus(3));
console.log(minus(7, 2));

function power(base, exponent = 2) {
	let result = 1;
	for (let count = 0; count < exponent; ++count) {
		result *= base;
	}
	return result;
}

console.log(power(4));
console.log(power(2, 6));