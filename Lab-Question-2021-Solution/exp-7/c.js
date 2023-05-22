function isHexadecimal(value) {
    // Remove any leading "0x" or "0X" prefix
    value = value.replace(/^0x|^0X/, '');
    
    // Check if the value consists of valid hexadecimal characters
    return /^[0-9a-fA-F]+$/.test(value);
  }
  
  // Example usage
  var hexValue1 = "1A2B";
  var hexValue2 = "0xFF";
  var nonHexValue = "GHIJK";
  
  console.log(isHexadecimal(hexValue1));  // Output: true
  console.log(isHexadecimal(hexValue2));  // Output: true
  console.log(isHexadecimal(nonHexValue));  // Output: false
  