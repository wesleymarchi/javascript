/* Click */

var message = '<div class=\"header\"><a id=\"close\" href=\"#\">close X</a></div>';
message += '<div><h2>SYstem Maintenance</h2>';
message += 'Our servers are being updated between 3 and 4 a.m. ';
message += 'During this time, there may be minor disruptions to service.</div>';

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = message;

document.body.appendChild(elNote);

function dismissNote() {
    document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);