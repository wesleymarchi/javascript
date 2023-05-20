/* Selecionando o primeiro e último filho, conforme a tag */

var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// Altera os valores dos atributos class
firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');