function power(base, exponent) {
	if (exponent === 0) return 1;
	return base * power(base, exponent - 1);
}

console.log(`5 ^ 2 = ${power(5, 2)}`);

function isEven(number) {
	function findUsingTwo(current, number) {
		if (current == number) {
			return true;
		} else if (current > number) {
			return false;
		} else {
			return findUsingTwo(current + 2, number);
		}
	}
	return findUsingTwo(0, number);
}

console.log(`Is 18 even? ${isEven(18)}`);
console.log(`Is 23 even? ${isEven(23)}`);