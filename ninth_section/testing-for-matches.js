console.log(/abc/.test('abcde'))
console.log(/abc/.test('abxce'))
console.log(/abc/.test('xyzabced'))
// We can find it using indexOf or includes
console.log('xyzabced'.includes('abc'))
console.log(('abcde'.indexOf('abc') === -1) ? false : true)
console.log(('abxde'.indexOf('abc') === -1) ? false : true)