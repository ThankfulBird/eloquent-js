let anArray = ['Squirrel', 'egg', 'table', 'rocket']
// Classic method
for (let i = 0; i < anArray.length; ++i) {
    console.log('Current Element: ' + anArray[i])
}
// Modern method: Works for strings etc.
for (let entry of anArray) {
    console.log('CurrentElementFancier: ' + entry)
}
// String version 
for (let letter of anArray[0]) {
    console.log('Current Letter: ' + letter)
}