/* Tratamento de eventos direto no HTML (não recomendado) */

function checkUsername() {
    var elMessage = document.getElementById('feedback');
    var elUsername = document.getElementById('username');

    if (elUsername.value.length < 5) {
        elMessage.textContent = 'Username must be 5 characteres or more';
    } else {
        elMessage.textContent = '';
    }
}