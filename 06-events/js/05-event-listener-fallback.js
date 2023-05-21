/* Alternativa para executar ouvintes de eventos em versões antigas do IE */

var elUsername = document.getElementById('username');
var elMessage = document.getElementById('feedback');

function checkUsername (minLength) {
    if (elUsername.value.length < minLength) {
        elMessage.textContent = 'Username must be ' + minLength + ' characters or more';
    } else {
        elMessage.textContent = '';
    }
}

// Verifica se ouvintes de eventos são suportados
if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', function () {
        checkUsername(5);
    }, false);
} else {
    elUsername.attachEvent('onblur', function () {
        checkUsername(5);
    });
}