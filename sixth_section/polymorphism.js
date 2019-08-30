function Wallet(money, currency) {
    this.money = money
    this.currency = currency
}
let myWallet = new Wallet(30, '€')
console.log(myWallet.toString())
myWallet.toString = function() {
    return `Current money in wallet: ${this.money}${this.currency}`
}
console.log(myWallet.toString())
// Polymorphism is basically overriding methods so that they work differently for different data structures
// For example for/of loops
// We can write our own for loops for different data structures just after learning what symbols are