let x = 20; // Global variable

if (true) {
	let y = 20;
	var z = 30;
	console.log(`x + y + z = ${x + y + z}`);
}

console.log(`x + z = ${x + z}`);
//console.log(`y = ${y}`); // y is undefined, local variable 
if (true) { // second scope
	if (true) { // first scope
		var q = 23; // var is defined locally yet it is treated as global
	}
}

console.log(`q = ${q}`); // global scope

// Each scope can reach inner scopes
let n = 100;

const halve = function() {
	return n / 2;
}

console.log(`100 / 2 = ${halve()}`);
// Lexical scoping in nutshell: inner scopes can see outer scopes, otherwise wrong

// Function values can be used and changed
class MissileSystem {
	constructor(safeMode) {
		this.safeMode = true;
	}

	launch(time) {
		console.log(`Launching missiles: ${time}.`);
	}
}

const missileSystem = new MissileSystem();

let launchMissiles = function() {
	missileSystem.launch('now');
}

if (missileSystem.safeMode) {
	launchMissiles = function() {
		console.log(`Launch has been cancelled.`);
	}
}

launchMissiles();

// Declaring functions in shorthand
foreseeFuture();

// Function declarations are not part of the top-to-bottom flow
function foreseeFuture() {
	console.log(`You shall never be immortals.`);
}

