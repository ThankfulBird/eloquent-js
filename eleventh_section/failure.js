// Then is for resolved values
// Catch for rejected values
new Promise((resolve, reject) => reject(12))
.then(value => console.log('Handler 1', value))
.catch(reason => {
    console.log('Caught failure ' + reason)
    return 'nothing'
}).then(value => console.log('Handler 2', value))