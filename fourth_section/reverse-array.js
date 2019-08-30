// Pure but slow time complexity O(n) where n is the length of array
// Also has a space complexity o(n)
function reverseArray(array) {
    let newArray = []
    /**
    Dont use below code it is no pure
    while(array.length) {
        newArray.push(array.pop())
    }
     */
    for (let i = 0; i < array.length; ++i) {
        newArray.unshift(array[i])
    }
    return newArray
}
// Impure yet fast a little bit (Time complexity O(n / 2)) decrease by a factor ***
// No space complexity inplace
function reverseArrayInPlace(array) {
    let length = array.length
    for (let i = 0;  i < length / 2; ++i) {
        let temp = array[i]
        array[i] = array[length - i - 1]
        array[length - i - 1] = temp
    }
}

console.log(reverseArray(['A', 'B', 'C']))
let anArray = [1, 2, 3, 4, 5]
reverseArrayInPlace(anArray)
console.log(anArray)
