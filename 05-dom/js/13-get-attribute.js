/* Obtendo valores de atributos */

var firstItem = document.getElementById('one');

if (firstItem.hasAttribute('class')) { // Verifica se existe um atributo class
    var attr = firstItem.getAttribute('class');

    //Insere o valor desse atributo abaixo da lista
    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
}