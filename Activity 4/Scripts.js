var user = 'mike';
var salutaion = 'hello';
var greeting = salutaion + user + '! Here are the latest sock revisions';

var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var price = 20, studentDiscount = .10, studentPrice = price - (price * studentDiscount);

var priceEl = document.getElementById('price'), studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);