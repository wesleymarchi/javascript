// UTILIZANDO BOOLEAN PARA ALTERAR OS ATRIBUTOS CLASS DOS ELEMENTOS HTML
var inStock = true;
var shipping = false;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShipping = document.getElementById('shipping');
elShipping.className = shipping;