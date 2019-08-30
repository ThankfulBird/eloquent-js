/*
    JSON looks similar to JavaScript’s way of writing arrays
    and objects, with a few restrictions. All property names 
    have to be surrounded by double quotes, and only simple 
    data expressions are allowed—no function calls, bindings, 
    or anything that involves actual computation. 
    Comments are not allowed in JSON.
*/

let string = JSON.stringify({meal: 'meat', time: 'afternoon', isHealthy: true})
console.log(string)
console.log(JSON.parse(string).time)