function performOperation(operation) {
  var val1 = parseFloat(document.getElementById('val1').value);
  var val2 = parseFloat(document.getElementById('val2').value);
  var answerElement = document.getElementById('answer');
  var result;

  if (isNaN(val1) || isNaN(val2)) {
    answerElement.innerText = "Invalid input";
    return;
  }

  switch (operation) {
    case 'addition':
      result = val1 + val2;
      break;
    case 'subtraction':
      result = val1 - val2;
      break;
    case 'multiplication':
      result = val1 * val2;
      break;
    case 'division':
      if (val2 === 0) {
        answerElement.innerText = "Division by zero error";
        return;
      }
      result = val1 / val2;
      break;
    default:
      answerElement.innerText = "Invalid operation";
      return;
  }

  answerElement.innerText = "Result: " + result;
}

function clearAll() {
  document.getElementById('val1').value = "";
  document.getElementById('val2').value = "";
  document.getElementById('answer').innerText = "";
}