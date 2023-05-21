/* Removendo um elemento da arvore DOM */

var element = document.getElementsByTagName('li')[3];
var containerElement = element.parentNode; // Obtém o elemento Pai de <li>

containerElement.removeChild(element); // A partir do elemento Pai, remove o elemento Filho