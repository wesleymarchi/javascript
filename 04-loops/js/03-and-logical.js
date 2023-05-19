/* && (and) lógico */

var x = 7;
var y = 7;
var xPass = 6;
var yPass = 6;
var passBoth = (x >= xPass) && (y >= yPass);
var message = 'Both rounds passed: ' + passBoth;

var el = document.getElementById('info');
el.textContent = message;