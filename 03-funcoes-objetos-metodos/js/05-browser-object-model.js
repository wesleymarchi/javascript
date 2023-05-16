/* Browser Object Model (BOM) */

var message = '<h3>Browser window</h3><p>width: ' + window.innerWidth + '</p>';
message += '<p>height: ' + window.innerHeight + '</p>';
message += '<h3>history</h3><p>items: ' + window.history.length + '</p>';
message += '<h3>screen</h3><p>width: ' + window.screen.width + '</p>';
message += '<p>height: ' + window.screen.height + '</p>';

var elInfo = document.getElementById('info');
elInfo.innerHTML = message;

alert('Current page: ' + window.location);