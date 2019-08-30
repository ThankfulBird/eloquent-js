let quotingPattern = /(^'\S+)|(\S+'$)|(^'\S+'$)/
let text = `'I'm the cook,' he said, 'it's my job.'`
console.log(text.replace(/\b(')(\w+)/g, "|$2")
.replace(/'/g, "\"").replace(/\|/g, "'"))