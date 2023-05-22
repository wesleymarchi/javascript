/* Eventos Focus e Blur */

function checkUsername () {
    var username = el.value;

    if (username.length < 5) {
        elMessage.className = 'warning';
        elMessage.textContent = 'Not long enough, yet...';
    } else {
        elMessage.textContent = '';
    }
}

function tipUsername () {
    elMessage.className = 'tip';
    elMessage.innerHTML = 'Username must be at least 5 characters';
}

var el = document.getElementById('username');
var elMessage = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);