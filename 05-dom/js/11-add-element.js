/* Adicionando uma elemento à árvore DOM */

var element = document.createElement('li');
var textNode = document.createTextNode('quinoa');

// Adiciona o text ao elemento
element.appendChild(textNode);

// Posição para adicionar o elemento
var position = document.getElementsByTagName('ul')[0];
position.appendChild(element);