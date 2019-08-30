let fs = require('fs')
fs.readFile('enemies.ini', 'utf-8', function(err, contents) {
    if (err) return err
    let lineData = contents.split(/\r?\n/)
    let fileObject = {}
    let currentSection = fileObject
    lineData = lineData.filter((lineDatum => !/^(;.*)?$/.test(lineDatum)))
    for (let lineDatum of lineData) {
        if (/^\[\w+]/.test(lineDatum)) {
            const lineDatumUpdated = lineDatum.substring(1, lineDatum.length - 1)
            fileObject[lineDatumUpdated] = {}
            currentSection = fileObject[lineDatumUpdated]
        } else if (/^\w+=/.test(lineDatum)) {
            currentSection[lineDatum.substring(0, lineDatum.indexOf('='))] 
                = lineDatum.substring(lineDatum.indexOf('=') + 1)
        } else {
            console.error('Error: Invalid format!')
            return
        }
    }
    console.log(fileObject)
})