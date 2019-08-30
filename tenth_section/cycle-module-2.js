const cm1 = require('./cycle-module-1')

exports.STATUS_CODE = '401'

cm1.moduleNotify()
exports.statusReport = function() {
    console.log('Cyclic module invocation finished.')
}