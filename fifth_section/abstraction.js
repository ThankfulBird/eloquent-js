let globalSum

function loop(beginIndex, endIndex, increment, func) {
    globalSum = 0
    for (let i = beginIndex; i < endIndex; i = increment + i) {
        func(i)
    }
}

loop(1, 5, 2, (value) => {
    globalSum += value
})

console.log(globalSum)