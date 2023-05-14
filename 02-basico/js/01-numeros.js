// VARIAVEIS
var price = 10;
var quantity = 2;
total = price * quantity;

var el = document.getElementById('cost'); // Indica o elemento que será utilizado
el.textContent = 'R$' + total; // Insere o total no elemento