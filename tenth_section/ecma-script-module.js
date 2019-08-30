export function giveMessage(statusCode) {
    switch(statusCode) {
        case 0: console.log('Module load is failed.');break
        case 1: console.log('Module load is successful.');break
        default: console.log('Status code unknown.')
    }
}