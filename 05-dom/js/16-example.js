/* Exemplo */

var list = document.getElementsByTagName('ul')[0];

// Adiciona um item no fim da lista
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');

newItemLast.appendChild(newTextLast); // Adiciona o nó de texto ao elemento
list.appendChild(newItemLast); // Adiciona o elemento no fim da lista

// Adiciona um item no inicio da lista
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');

newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild); // Adiciona o elemento ao inicio da lista

var listItems = document.querySelectorAll('li');

for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

// Adiciona o o número de itens no titulo
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue; // Get text
var totalItems = listItems.length;
var newHeading = headingText + '<span> ' + totalItems + '</span>';
heading.innerHTML = newHeading; // Atualiza o titulo