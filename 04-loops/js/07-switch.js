/* Instrução Switch */

var message;
var level = 2;

switch (level) {
    case 1:
        message = 'Good luck on the first test';
        break;
    case 2:
        message = 'Second of three - keep going!';
        break;
    case 3:
        message = 'Final round, almost there!';
        break;
    default:
        message = 'Good luck!';
}

var el = document.getElementById('info');
el.textContent = message;