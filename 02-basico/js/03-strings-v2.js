// UTILIZANDO BARRA INVERTIDA PARA 'ESCAPAR CARACTERES' (backslash)

var title = "My name's ";
var message = '<a href=\"www.google.com\">Batman</a>';

var elTitle = document.getElementById('title');
elTitle.innerHTML = title;

var elMessage = document.getElementById('message');
elMessage.innerHTML = message; // Não é recomendado utilizar innerHTML, por questões de segurança