const cm2 = require('./cycle-module-2')

exports.moduleNotify = function() {
    if (cm2.STATUS_CODE === '401') {
        console.log('Cycle module 1 invoked.')
    } else {
        console.error('Process interrupted.')
    }
}