function countLetterOccurrences(str) {
    var result = {};
    
    // Convert the string to lowercase to count occurrences regardless of case
    var lowercaseStr = str.toLowerCase();
    
    // Iterate over each character in the string
    for (var i = 0; i < lowercaseStr.length; i++) {
      var char = lowercaseStr.charAt(i);
      
      // Skip non-alphabetic characters
      if (!char.match(/[a-z]/i)) {
        continue;
      }
      
      // Increment the count for the current character
      result[char] = (result[char] || 0) + 1;
    }
    
    return result;
  }
  
  // Example usage
  var text = "Hello, World!";
  var occurrences = countLetterOccurrences(text);
  console.log(occurrences);
  