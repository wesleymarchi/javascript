/* Instrução IF */

var score = 70;
var message = '';

function congratulate () {
    message += 'Congratulations!';
}

if (score >= 60) {
    congratulate();
    message += ' Proceed to the next round.';
}

var el = document.getElementById('info');
el.innerHTML = message;