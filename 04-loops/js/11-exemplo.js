/* Exemplo */

var table = 3;
var operator = 'addition';
var message = '';
var i = 1;

if (operator === 'addition') {
    while (i < 11) {
        message += i + ' + ' + table + ' = ' + (i + table ) + '<br />';
        i++;
    }
} else {
    while (i < 11) {
        message += i + ' x ' + table + ' = ' + (i * table) + ' <br />';
        i++;
    }
}

var el = document.getElementById('info');
el.innerHTML = message;