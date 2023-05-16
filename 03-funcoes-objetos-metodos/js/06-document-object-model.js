/* Document Object Model (DOM) */

var message = '<p><b>Title: </b>' + document.title + '<br />';
message += '<b>Address: </b>' + document.URL + '<br />';
message += '<b>Last modified: </b>' + document.lastModified + '</p>';

var elInfo = document.getElementById('info');
elInfo.innerHTML = message;