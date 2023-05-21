/* Maneira de utilizar parâmetros em ouvintes de eventos */

var elUsername = document.getElementById('username');
var elMessage = document.getElementById('feedback');

function checkUsername (minLength) {
    if (elUsername.value.length < minLength) {
        elMessage.textContent = 'Username must be ' + minLength + ' characters or more.';
    } else {
        elMessage.textContent = '';
    }
}

// A função anônima só irá executar no momento que o blur for ativado.
elUsername.addEventListener('blur', function () {
    checkUsername(5);
}, false);