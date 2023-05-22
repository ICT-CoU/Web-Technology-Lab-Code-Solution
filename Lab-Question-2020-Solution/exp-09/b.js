// Write a js conditional statement to sort numbers and display an alert box to show the result.

function sortThreeNumbers(a, b, c) {
  var result = [a, b, c];
  if (a > b) {
    result[0] = b;
    result[1] = a;
  }
  if (result[1] > c) {
    result[2] = result[1];
    result[1] = c;
  }
  if (result[0] > result[1]) {
    var temp = result[0];
    result[0] = result[1];
    result[1] = temp;
  }
  return result;
}

alert(sortThreeNumbers(3, 2, 1));
// console.log(sortThreeNumbers)