// if conditionals
let theNumber = Number('23');
if (!Number.isNaN(theNumber)) {
	console.log(`Your number is the square root of ${theNumber * theNumber}.`);
} else {
	console.log(`Hey. Why didn't you give me a number?`);
}
// elseif
if (theNumber < 10) {
	console.log(`Small`);
} else if (theNumber < 100) {
	console.log(`Medium`);
} else {
	console.log(`Large`);
}
// While loop
let number = 0;
while (number <= 12) {
	console.log(number);
	number = number + 3;
}
// do while
let index = 3;
do {
	console.log(`Index: ${index}`);
	index = index + 1;
} while(index < 6);
// for loop
for (let number = 0; number < 13; number = number + 2) {
	console.log(number);
}
for (let current = 20; ;current = current + 1) {
	if (current % 7 == 0) {
		console.log(current);
		break;
	}
}
for (let index = 0; index < 10; index = index + 1) {
	if (index % 3 == 0) {
		continue;
	}
	console.log(`Index: ${index}`);
}
// a basic loop to find 2s power until 100
index = 0;
for (let number = 1; number < 100; number *= 2) {
	console.log(`Two's ${index}th value: ${number}`);
	++index;
}
// switch 
let weather = 'sunny';
switch(weather) {
	case 'sunny': console.log(`Dress lightly.`);break;
	case 'rainy': console.log(`Take your umbrella.`);break;
	default: console.log(`Undetermined weather condition.`);
}