function getTodaysDate() {
  var today = new Date();
  return today.getFullYear();
}
  var dateEl = document.getElementById('date');
  dateEl.textContent = getTodaysDate();
  
  
  
var greeting = 'This website has all you need to prepare for Halloween! Click on one of the links bellow to learn more.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;


