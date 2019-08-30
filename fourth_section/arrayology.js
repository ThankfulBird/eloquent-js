let todoList = []
function remember(task) {
    todoList.push(task)
}

function getTask() {
    return todoList.shift()
}

function rememberUrgently(task) {
    todoList.unshift(task)
}
remember('grocery')
remember('writing')
getTask()
rememberUrgently('piano')
console.log(todoList)
let newArray = [4, 1, 7, 8, 4, 5, 8]
console.log(newArray.indexOf(4, 2))
console.log(newArray.indexOf(2))
console.log(newArray.lastIndexOf(8, 3))
// Slice method when used with no arguments
// it copies the entire array
console.log(newArray.slice(2))
console.log(newArray.slice(2, 5))
console.log(newArray.slice())
// concat method for arrays same as + operator for strings
let firstArray = [1, 2, 3], secondArray = [4, 5]
console.log(firstArray.concat(secondArray))
/*
    If you pass concat an argument that is not an array,
    that value will be added to the new array as
     if it were a one-element array.
 */
// Same as push!!!
console.log([1, 2, 3].concat('Hello World'))