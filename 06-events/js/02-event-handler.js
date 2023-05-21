/* Rotina de tratamento de evento tradicional */

function checkUsername () {
    var elMessage = document.getElementById('feedback');

    if (this.value.length < 5) {
        elMessage.textContent = 'Username must be 5 characters or more.';
    } else {
        elMessage.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername; // Omite os parenteses