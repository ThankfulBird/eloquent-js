// A promise is an asynchronous action 
// that may complete at some point and produce a value
let seventeen = Promise.resolve(17)
// When you have a promise you can call its then method
// which basically takes a callback function
// And uses it when value is ready
// Resolved = Finished
// Then method returns another promise
// And after that resolves to its result
seventeen.then(value => console.log(`Got ${value}`))
// Creating a promise 
function recordUserPromise(name) {
    return new Promise(resolve => {
        console.log(`User [${name}] has been recorded.`)
        setTimeout(() => {
            seventeen = Promise.resolve(23)
            seventeen.then(value => console.log(`Got ${value}`))
        }, 2000);
    })
}

recordUserPromise('Edward')
