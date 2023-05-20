/* Seleciona um elemento conforme seu atributo class */

var elements = document.getElementsByClassName('hot');

if (elements.length > 2) {
    var el = elements[2];
    el.className = 'cool';
}