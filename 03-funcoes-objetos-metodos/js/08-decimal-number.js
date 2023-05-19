/* Lidando com números decimais */

var num = 10.23456;
var message = '<h2>Original number</h2><p>' + num + '</p>';

// toFixed() arredonda para o número especificado de casas decimais - retorna uma string.
message += '<h2>toFixed()</h2><p>' + num.toFixed(3) + '</p>';

// toPrecision() arredonda para o número total de casas decimais.
message += '<h2>toPrecision()</h2><p>' + num.toPrecision(3) + '</p>';

var el = document.getElementById('info');
el.innerHTML = message;