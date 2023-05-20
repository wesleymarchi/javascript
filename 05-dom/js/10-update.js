/* Atualizando o texto e marcação HTML */

var firstItem = document.getElementById('one');
var itemContent = firstItem.innerHTML;

firstItem.innerHTML = '<a href=\"www.google.com\">' + itemContent + '</a>';