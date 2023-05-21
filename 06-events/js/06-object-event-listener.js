/* Ouvinte de evento com objeto event */

function checkLength (e, minLength) {
    var el, elMessage;

    if (!e) { // Se o objeto event não existir
        e = window.event; // Fallback (alternativo) para o IE
    }

    el = e.target || e.srcElement; // Obtém o alvo especifico do evento
    elMessage = el.nextSibling; // Obtém o irmão

    if (el.value.length < minLength) {
        elMessage.innerText = 'Username must be ' + minLength + ' characters or more.';
    } else {
        elMessage.innerText = '';
    }
}

var elUsername = document.getElementById('username');

if (elUsername.addEventListener) { // Se existe suporte para Event Listener
    elUsername.addEventListener('blur', function (e) {
        checkLength(e, 5);
    }, false);
} else {
    elUsername.attachEvent('onblur', function (e) {
        checkLength(e, 5);
    });
}