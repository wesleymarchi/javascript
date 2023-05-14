/* Função que exibe uma mensagem */

var message = 'Hello world!';

function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = message;
}

updateMessage();