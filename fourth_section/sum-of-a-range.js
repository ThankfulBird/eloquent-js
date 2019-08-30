function range(start, end, step = 1) {
    // For es5 use below
    //step = step || 1
    let array = []
    if (step == 0) {
        console.warn('Step cannot be 0.')
        return null
    }
    if (step < 0) {
        for (let i = start; i >= end; i = i + step) {
            array.push(i)
        }
    } else {
        for (let i = start; i <= end; i = i + step) {
            array.push(i)
        }
    }
    return array
}

function sum(list) {
    let total = 0
    for (let element of list) {
        total += element
    }
    return total
}

console.log(range(5, 2, -1))