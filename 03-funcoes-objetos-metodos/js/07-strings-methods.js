/* Utilizando métodos do objeto string */

var saying = 'Home sweet home!';
var message = '<h2>Length</h2><p>' + saying.length + '</p>';

message += '<h2>UpperCase</h2><p>' + saying.toUpperCase() + '</p>';
message += '<h2>LowerCase</h2><p>' + saying.toLowerCase() + '</p>';
message += '<h2>Character index: 12</h2><p>' + saying.charAt(12) + '</p>';
message += '<h2>First ee</h2><p>' + saying.indexOf('ee') + '</p>';
message += '<h2>Last e</h2><p>' + saying.lastIndexOf('e') + '</p>';
message += '<h2>Character index: 8-14</h2><p>' + saying.substring(8, 14) + '</p>';
message += '<h2>Replace</h2><p>' + saying.replace('me', 'w') + '</p>';

var el = document.getElementById('info');
el.innerHTML = message;