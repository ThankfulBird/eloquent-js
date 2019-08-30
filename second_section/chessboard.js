/*
// O(n^2) not good
let N = 8;
let tokens = [' ', '#'];
let output;
for (let i = 0; i < N; ++i) {
	output = '';
	for (let j = 0; j < N; ++j) {
		output = output.concat(tokens[(i + j) % 2]);
	}
	console.log(output);
} */

// O(n) much good
let N = 8;
let tokens = [' ', '#'];
let firstPattern = '', secondPattern = '';
for (let i = 0; i < N; ++i) {
	firstPattern = firstPattern.concat(tokens[i % 2]);
	secondPattern = secondPattern.concat(tokens[(i + 1) % 2]);
}
for (let index = 0; index < N; ++index) {
	(index % 2 == 0) ? console.log(firstPattern): console.log(secondPattern);
}