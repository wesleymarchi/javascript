/* Selecionando elementos conforme o selector css */

// Retorna a primeira ocorrência
var el = document.querySelector('li.hot');
el.className = 'cool';

// Retorna uma NodeList e seleciona o segundo seletor da NodeList
var elements = document.querySelectorAll('li.hot');
elements[1].className = 'cool';