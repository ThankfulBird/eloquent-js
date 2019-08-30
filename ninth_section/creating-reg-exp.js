// There are two ways to create regexps
// First is using contructor since regexps are objects
let re1 = new RegExp('abc')
// Second is using back and forth slashes
let re2 = /abc/
// In regexps question mark, plus sign etc. have other meanings
// So use them with \ in order to use them in pure way
let eigteenPlus = /eighteen\+/
