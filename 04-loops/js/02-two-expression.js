/* Comparando duas expressões */

var x = 75;
var y = 70;
var xHigh = 60;
var yHigh = 65;
var comparison = (x + y) > (xHigh + yHigh);

var el = document.getElementById('info');
el.textContent = 'New high score: ' + comparison;