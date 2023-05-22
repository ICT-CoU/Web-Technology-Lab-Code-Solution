 function displayDate() {
  var date = new Date();
  var display = document.getElementById('display');
  display.value = date.toDateString();
}

function calculateFactorial() {
  var n = parseInt(prompt("Enter a number:"));
  var factorial = 1;

  for (var i = 1; i <= n; i++) {
    factorial *= i;
  }

  alert("The factorial of " + n + " is: " + factorial);
}

function calculateSum() {
  var n = parseInt(prompt("Enter a number:"));
  var confirmAdd = confirm("Do you want to add another number?");
  var sum = n;

  while (confirmAdd) {
    var additionalNumber = parseInt(prompt("Enter an additional number:"));
    sum += additionalNumber;
    confirmAdd = confirm("Do you want to add another number?");
  }

  alert("The sum of the entered numbers is: " + sum);
}