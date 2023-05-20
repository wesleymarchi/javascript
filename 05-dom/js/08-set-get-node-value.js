/* Acessando e alterando um nó de texto */

var item = document.getElementById('two');
var elText = item.firstChild.nodeValue; // Obtém o text

elText = elText.replace('pine nuts', 'kale');
item.firstChild.nodeValue = elText;