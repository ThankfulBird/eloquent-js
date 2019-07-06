function countChar(string, key) {
	let counter = 0;
	for (let i = 0; i < string.length; ++i) {
		if (string[i] === key) ++counter;
	}
	return counter;
}

function countBs(string) {
	return countChar(string, 'B');
}

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));