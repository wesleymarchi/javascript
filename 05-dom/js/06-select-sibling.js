/* Selecionando irmãos anteriores e posteriores, conforme determinado elemento */

let startItem = document.getElementById('two');
let previousItem = startItem.previousSibling;
let nextItem = startItem.nextSibling;

// Alterando os valores
previousItem.className = 'complete';
nextItem.className = 'cool';