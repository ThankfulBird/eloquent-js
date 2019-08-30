class EmptyArrayError extends Error {}

function findFirstElement(array) {
    if (array.length === 0) throw new EmptyArrayError()
    return {firstElement: array[0]}
}

try {
    findFirstElement([])
} catch (error) {
    if (error instanceof EmptyArrayError) {
        console.error(`Can't find the first element for an empty array.`)
    } else {
        console.error(error)
    }
}