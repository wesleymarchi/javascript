/* Operadores de Compração */

var pass = 70;
var score = 80;

var hasPassed = score >= pass;
var el = document.getElementById('info');
el.textContent = 'Level passed: ' + hasPassed;