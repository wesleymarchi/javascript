/* Obtendo apenas o texto, ignorando qualquer outra marcação */

var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var message = '<p>textContent: ' + showTextContent + '</p>';
message += '<p>innerText: ' + showInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = message;

firstItem.textContent = 'sourdough bread';