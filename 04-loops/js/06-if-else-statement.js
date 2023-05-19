/* IF...ELSE */

var pass = 70;
var score = 70;
var message;

if (score >= pass) {
    message = 'Congratulations, you passed!';
} else {
    message = 'Have another go!';
}

var el = document.getElementById('info');
el.textContent = message;