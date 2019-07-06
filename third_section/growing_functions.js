function zeroPad(number, width) {
	let string = String(number);
	while (string.length < width) {
		string = '0' + string;
	}
	return string;
}

function printGroceryStore(apples, oranges, tomatoes) {
	console.log(`${zeroPad(apples, 3)} apples`);
	console.log(`${zeroPad(oranges, 3)} oranges`);
	console.log(`${zeroPad(tomatoes, 3)} tomatoes`);
}

printGroceryStore(17, 5, 102);
