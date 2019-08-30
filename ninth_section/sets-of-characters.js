// So why to use regexps
// Basically it gives us the opportunity
// to perform complicated pattern searchs
let date = 'in 1992'
console.log(/[0123456789]/.test(date))
console.log(/[0-9]/.test(date))
console.log(/[a-z]/.test(date))
/**
A number of common character groups have their own built-in shortcuts.
Digits are one of them: \d means the same thing as [0-9].
\d	Any digit character -> /[0-9]/
\w	An alphanumeric character (“word character”) ->/[a-z][A-Z]/
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline
 */
let postalCodePattern = /\d\d\w-\w\W-\D\D\w\d/
console.log(postalCodePattern.test('94A-s?-&dT8'))
console.log(postalCodePattern.test('9sd-s?-se32'))
// In bracket special characters lose their meanings
// Good news no need to use the backslash
let specialPattern = /[\d\D+]/
console.log(specialPattern.test('2A+'))
// To negate a set use ^ (caret) operator
// And to show that pattern must be at the beginning
let stubbornPattern = /^[0]/
console.log(stubbornPattern.test('0abdsf'))
console.log(stubbornPattern.test('ab0dsf'))
// To negate put it inside brackets
function stringPureAlpha(string) {
    string = string.toLowerCase()
    let nonAlphaPattern = /[^a-z ]/
    return (!nonAlphaPattern.test(string)) ? true : false
}
console.log(stringPureAlpha('?23abc'))
console.log(stringPureAlpha('Ill Wind'))