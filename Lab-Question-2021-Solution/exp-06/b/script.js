function sortNumbers() {
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));
  var num3 = parseFloat(prompt("Enter the third number:"));

  var sortedNumbers;

  if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
      sortedNumbers = num1 + ", " + num2 + ", " + num3;
    } else {
      sortedNumbers = num1 + ", " + num3 + ", " + num2;
    }
  } else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
      sortedNumbers = num2 + ", " + num1 + ", " + num3;
    } else {
      sortedNumbers = num2 + ", " + num3 + ", " + num1;
    }
  } else {
    if (num1 <= num2) {
      sortedNumbers = num3 + ", " + num1 + ", " + num2;
    } else {
      sortedNumbers = num3 + ", " + num2 + ", " + num1;
    }
  }

  alert("Sorted numbers: " + sortedNumbers);
}