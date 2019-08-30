let arrays = [[1, 2 ,3] , [4, 5], [6]]
arrays = arrays.reduce((acc, element) => acc.concat(element), [])
console.log(arrays)