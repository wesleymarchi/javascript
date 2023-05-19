/* Instrução if */

var score = 70;
var message;

if (score >= 70) {
    message = 'Congratulations!';
    message += ' Proceed to the next round.';
}

var el = document.getElementById('info');
el.textContent = message;