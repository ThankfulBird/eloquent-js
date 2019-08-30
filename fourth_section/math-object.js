function convertPolarToCartesian(radius, angle) {
    angle = angle * Math.PI / 180;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    }
}

console.log(convertPolarToCartesian(1, 30))
// A random number between 10 and 30
console.log(10 + Math.random() * 20)
console.log(Math.floor(Math.random() * 10))