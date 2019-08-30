function arrayToList(array) {
    let list = null
    for (let i = array.length - 1; i >= 0; --i) {
        let rest = list
        list = {}
        list.value = array[i]
        list.rest = rest
    }
    return list
}

function listToArray(list) {
    let array = []
    while (list) {
        array.push(list.value)
        list = list.rest
    }
    return array
}

function prepend(list, value) {
    let newList = {}
    newList.value = value
    newList.rest = list
    return newList
}

function nth(list, n) {
    for (let i = 0; i < n; ++i) {
        list = list.rest
    }
    return list.value
}

function nthRecursive(list, n) {
    if (n == 0) {
        return list.value
    }
    return nthRecursive(list.rest, n - 1)
}

console.log(arrayToList([1, 2, 3]))
let charList = arrayToList(['A', 'B', 'C'])
console.log(charList)
console.log(listToArray(charList))
charList = prepend(charList, 'S')
console.log(charList)
console.log(nth(charList, 2))
console.log(nthRecursive(charList, 0))
