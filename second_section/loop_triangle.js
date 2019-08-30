/*const LEN = 7;
let string;
for(let i = 0; i < LEN; ++i) {
	string = '';
	for (let j = 0; j < LEN; ++j) {
		if (j <= i) {
			string = string.concat('#');
		}
	}
	console.log(string);
}*/

for (let line = '#'; line.length < 8; line += '#')
	console.log(line);

