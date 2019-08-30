const x = 1
// Eval function helps us to evaluate the code
function evalAndReturnX(code) {
    eval(code)
    return x
}

console.log(evalAndReturnX('var x = 2'))
console.log(x)
// Using Function constructor is more secure
// Function (A string contains args, String contains body)
// It is secure to use to not tackle with scopes
let plusOne = Function('n', 'return n + 1')
console.log(plusOne(4))