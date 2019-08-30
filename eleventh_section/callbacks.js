// Not bad but can be messy
// Since with every level of indention
// Complexity grows
let currentUsername
function recordUser(username, callback) {
    currentUsername = username
    console.log('Waiting for the system to be ready.')
    setTimeout(callback, 2000)
}

recordUser('Harry', () => {
    console.log(`User ${currentUsername} has been recorded.`)
})