/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function strReverse(string) {
  let newString = '';
  for(let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

function strTransform(string) {
  const special = [' ', ',', '!', '?', '.'];
  let newString = '';
  for(let i = 0; i < string.length; i++) {
    newString += special.indexOf(string[i]) !== -1 ? '' : string[i];
  }
  return newString;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  str = strTransform(str);
  let reverse = strReverse(str);
  return str === reverse;
}

module.exports = isPalindrome;
