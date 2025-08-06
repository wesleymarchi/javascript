/* Lidando com o objeto Date */

var today = new Date();
var year = today.getFullYear();
var past = new Date('Dec 10, 2022 15:45:55');
var difference = today.getTime() - past.getTime();
var message = ' years of online travel advice.';

difference = (difference / 31556900000); // milissegundos em um ano não bissexto

var elMessage = document.getElementById('info');
elMessage.textContent = Math.floor(difference) + message;