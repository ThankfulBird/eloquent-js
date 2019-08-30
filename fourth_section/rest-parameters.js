function mergeStrings(...strings) {
    let mergedString = ''
    for (let string of strings) {
        mergedString += string
    }
    mergedString = '["' + mergedString + '"]'
    return mergedString
}

let someArray = ['What', 'azure']
console.log(mergeStrings('Nay', ...someArray, 'Perhaps'))
console.log(mergeStrings('Hello', ' ', 'World', '!'))
// Rest paramater always the last one
function add(message, limit, ...numbers) {
    console.log('Given message: [', message, '].')
    let total = 0
    for (let number of numbers) {
        if (number < limit) {
            total += number
        }
    }
    return total
}

console.log(add('Operation started!', 3, 1 ,2, 3))

