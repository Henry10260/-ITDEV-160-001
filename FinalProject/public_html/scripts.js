function getTodaysDate() 
{
  var today = new Date();
  return today.getFullYear();
}
  var dateEl = document.getElementById('date');
  dateEl.textContent = getTodaysDate();
  
  
  
var greeting = 'Enjoy the fun!';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;