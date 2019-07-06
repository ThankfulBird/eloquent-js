// A place where computer stores the function calls => call stack
// When a function is executed it is removed from stack 
// When a function is called it is added to stack

function greet(who) {
	console.log(`Hello ${who}`);
}
greet('Harry');
console.log(`Bye`);
/*
	Stack Scheme for calls above
	not in function
   		in greet
        	in console.log
   		in greet
	not in function
   		in console.log
	not in function
*/

// Stack Over Flow Error
function chicken() {
	return egg();
}
function egg() {
	return chicken();
}
console.log(`${chicken()} came first.`);