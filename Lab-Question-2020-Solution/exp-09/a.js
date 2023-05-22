// write a javascript function to get the number of occurences of each letter in specified string

function countLetters(str) {
  str = str.toLowerCase();
  var result = {};
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if(char>='a' && char<='z' || char>='A' && char<='Z') {
      char = char.toLowerCase();
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

console.log(countLetters('helLo world'));