var subtotal = (10 + 15) * 4; // 100
var shipping = 0.5 * (10 + 15); // 12.5

var total = subtotal + shipping; // 112.5

var elSubtotal = document.getElementById('subtotal');
elSubtotal.textContent = subtotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;