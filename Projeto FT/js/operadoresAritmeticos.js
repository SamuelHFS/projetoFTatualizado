var subtotal=(13 + 1) * 5;

var frete= 0.5 * (13 + 1);

var total= subtotal + frete;

var a = "R$ ";

var subResultado = document.getElementById("subtotalvalor");
subResultado.textContent +=  a + subtotal;

var freteResultado = document.getElementById('fretevalor');
freteResultado.textContent += a + frete;

var totalResultado = document.getElementById('totalvalor');
totalResultado.textContent += a + total;