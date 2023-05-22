function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Reverse the cleaned string
    var reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to the reversed string
    return cleanedStr === reversedStr;
  }
  
  // Example usage
  var text = "A man, a plan, a canal, Panama!";
  var isPalindromic = isPalindrome(text);
  console.log(isPalindromic);
  