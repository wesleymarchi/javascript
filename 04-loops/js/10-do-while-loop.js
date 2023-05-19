/* do..while loop */

var i = 1;
var message = '';

// Sempre executará ao menos uma vez.
do {
    message += i + ' x 5 = ' + (i * 5) + '<br />';
    i++;
} while (i < 1);

document.getElementById('info').innerHTML = message;