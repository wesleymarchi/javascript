/* Loop while */

var i = 1;
var message = '';

while (i < 10) {
    message += i + ' x 5 = ' + (i * 5) + '<br />';
    i++;
}

document.getElementById('info').innerHTML = message;