// Callback's first argument reserved for the error other feel free
function loadScript(src, callback) {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error('Script load error for ' + src))
    document.head.append(script)
    console.log(src + ' loaded.')
}

loadScript('./my-script.js', (error, script) => {
    if (error) {
        // Do something
    } else {
        newFunction()
        loadScript('./my-script-2.js', (error, script) => {
            if (error) {
                // Do something
            } else {
                console.info(script.src)
            }
        })
    }
})
document.write('Script is ready to be loaded.')

// Using seperate functions we can make the process even more readeble
// Future tip: Fundamental idea for promises

function colorCallback(color, callback) {
    if ((typeof color) !== 'string') {
        callback(new Error('Color must be a viable string.'), null)
    } else {
        callback(null, color)
    }
}

function changeBodyColor(error, color) {
    if (error) {
        console.error('Error detected.')
    } else {
        document.body.style.backgroundColor = color
        colorCallback('orange', changeTextColor)
    }
}

function changeTextColor(error, color) {
    if (error) {
        console.error('Error detected.')
    } else {
        document.body.style.color = color
    }
}

colorCallback('blueviolet', changeBodyColor)