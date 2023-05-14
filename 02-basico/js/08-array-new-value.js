var colors = ['red',
    'green',
    'blue']; // Notação literal

colors[2] = 'white';

var el = document.getElementById('colors');
el.textContent = colors[2];