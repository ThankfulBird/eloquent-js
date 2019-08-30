let messageContainer = document.getElementById('message-container')
messageContainer.innerText = 'Script is  loaded successfully.\n'

function newFunction() {
    messageContainer.append('Function 1 has been invoked.')
    messageContainer.append(document.createElement('br'))
}