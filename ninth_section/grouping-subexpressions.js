// Use paranthesis to use + and * operators
// On more than one character
// i means case sensitive: Equivalent for one character [a-zA-Z]
let evilLaugh = /pu+(ha+)+/i
console.log(evilLaugh.test('Puuuuuhaaahahahaa'))