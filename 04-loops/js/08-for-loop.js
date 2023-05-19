/* Loop for */

var scores = [24, 32, 17];
var arrLength = scores.length;
var roundNumber = 0;
var message = '';
var i;

for (i = 0; i < arrLength; i++) {
    roundNumber = i + 1;
    message += 'Round ' + roundNumber + ': ';
    message += scores[i] + '<br />';
}

document.getElementById('info').innerHTML = message;