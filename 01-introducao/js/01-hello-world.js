// EXIBE UMA MENSAGEM NA TELA DEPENDENDO DO HORARIO

var today = new Date();
var hourNow = today.getHours();
var message;

if (hourNow > 18) {
    message = 'Good evening, world!';
} else if (hourNow > 12) {
    message = 'Good afternoon, world!';
} else if (hourNow > 0) {
    message = 'Good morning, world!';
} else {
    message = 'Hello, world!';
}

document.write('<h3>' + message + '</h3>');