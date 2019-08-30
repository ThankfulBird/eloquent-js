console.log(new Date().toString())
console.log(new Date(2009, 11, 9, 12, 59, 59, 999).toString())
// Month range: 0-11 Beware
// GetTime() method returns number of miliseconds
// between a specific time from 1970 to the given time
// to go backward then 1970 use negative numbers
console.log(new Date(2013, 11, 19).getTime())
console.log(new Date(-12234424123112))
// To get the current miliseconds two ways
console.log(new Date().getTime())
console.log(Date.now())
// Creating a date object from a string
function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string)
    return new Date(year, month - 1, day)
}

console.log(getDate('3-7-2015').toString())