/* Exemplo básico */

let message = 'Hello ';
let name = 'Batman!';
let str = ', verifique seu pedido:';

// Concatenação
let welcome = message + name + str;

// Quadros
let sign = 'VATICANO';
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 2;
let total = subTotal + shipping;

// Obtendo o elemento com id message
let el = document.getElementById('message');
// Realiza a substituição do conteúdo default do elemento pela variável welcome
el.textContent = welcome;

let elSign = document.getElementById('userSign');
elSign.textContent = sign;

let elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

let elSubtotal = document.getElementById('subTotal');
elSubtotal.textContent = '$' + subTotal;

let elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

let elTotal = document.getElementById('total');
elTotal.textContent = '$' + total;