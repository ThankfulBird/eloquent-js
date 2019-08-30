let name = 'harry'
let text = 'Harry is a suspicious character.'
let regexp = new RegExp('\\b(' + name + ')\\b', 'gi')
console.log(text.replace(regexp, '_$1_'))
name = "dea+hl[]rd";
text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_"));  