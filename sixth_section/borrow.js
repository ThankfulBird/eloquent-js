let map = {one: true, two: true, hasOwnProperty: true}
/*if (map.hasOwnProperty === true) {
    map.hasOwnProperty = Object.prototype.hasOwnProperty
}

console.log(map.hasOwnProperty('one'))
console.log(map.hasOwnProperty('six'))*/
console.log(Object.prototype.hasOwnProperty.call(map, 'one'))