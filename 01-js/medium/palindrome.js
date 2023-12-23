/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let new_str = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i].match(/[a-z]/i)) {
      new_str += str[i].toLowerCase(); // Convert to lowercase for case-insensitivity
    }
  }
  const size = new_str.length;
  for (let i = 0; 2 * i < size; i++) {
    if (new_str[i] !== new_str[size - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
