/* Ouvintes de Eventos */

function checkUsername () {
    var elMessage = document.getElementById('feedback');

    if (this.value.length < 5) {
        elMessage.textContent = 'Username must be 5 character or more';
    } else {
        elMessage.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);