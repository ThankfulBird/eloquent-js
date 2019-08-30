// [^]* means take all line
console.log('Hello World'.match(/H([^]*)/))
function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, '')
}

console.log(stripComments('1 /* a */+/* b */ 1'))
// +, *, ?, and {} greedy operators
// to make them lazy use ? operator
// +?, *?, ??, {}?
function stripCommentsMended(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, '')
}

console.log(stripCommentsMended('1 /* a */+/* b */ 1'))