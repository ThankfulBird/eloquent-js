// Not completed yet
function deepEqual(dataType1, dataType2) {
    if (typeof dataType1 !== typeof dataType2) {
        return undefined
    } else if (typeof dataType1 !== 'object' && typeof dataType2 !== 'object') {
        return dataType1 === dataType2
    } else {
        let keys1 = Object.keys(dataType1), keys2 = Object.keys(dataType2)
        if (keys1.length !== keys2.length) return false
        for (let i = 0; i < keys1.length; ++i) {
            if (keys1[i] === keys2[i]) {
                if (dataType1[keys1[i]] !== dataType2[keys2[i]]) return false
                else if (typeof dataType1[keys1[i]] === 'object') {
                    return deepEqual(dataType1[keys1[i]], dataType2[keys2[i]])
                }
            } else return false
        }
        return true
    }
}

console.log(deepEqual(2, 2))
console.log(deepEqual(false, "A"))
console.log(deepEqual({key: 2}, {key: 2, value: 3}))
console.log(deepEqual({key: 2, value: 3}, {key: 2, value: 3}))
let obj = {here: {is: "an"}, object: 2}
console.log(deepEqual(obj, obj))
console.log(deepEqual(obj, {here: 1, object: 2}))
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}))