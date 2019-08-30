function chooseAFruit(fruit) {
    if (fruit.toLowerCase() === 'apple') return 'A'
    if (fruit.toLowerCase() === 'orange') return 'O'
    throw new Error('Undefined fruit=>' + fruit)
}

function visitGroceryStore(fruit) {
    if (chooseAFruit(fruit) === 'A') return 'A lovely red apple!'
    if (chooseAFruit(fruit) === 'O') return 'What a yummy orange is this!'
}

try {
    console.log(visitGroceryStore('Grape'))
} catch(error) {
    console.error('Something went wrong[' + error + ']')
}

// Somehow exceptions have some side effects
// And reducing them is a good practise
// finally keywords is our solution 

let users = {
    John: 43,
    Emily: 37,
    Shir: 22
}

function getAccount(accountName) {
    if (!users.hasOwnProperty(accountName)) throw new Error('No such user: ' + accountName)
    return accountName
}

function transfer(from, to, amount) {
    if (users[from] < amount) return
    let status = 0
    try {
        users[from] -= amount
        status = 1
        users[getAccount(to)] += amount
        status = 2
    } catch(error) {
        console.error(error)
    } finally {
        if (status === 1) {
            users[from] += amount
        }
    }
}

transfer('John', 'Tommy', 17)
console.log(users)