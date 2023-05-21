/* Evento Load dispara quando a página for carrega */

function setup () {
    var textInput;

    textInput = document.getElementById('username');
    textInput.focus();
}

window.addEventListener('load', setup, false);