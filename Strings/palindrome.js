
/*
  Classical palindrome js version.
  "A palindrome is a word, number, phrase, or other sequence of 
  characters which reads the same backward as forward, such as madam, racecar."
  https://en.wikipedia.org/wiki/Palindrome
*/

/**
 * Returns if the string is palindrome or not
 * case sensitive
 * @param {string} string. Required
 * @returns {boolean}
 */
function isPalindrome(string) {
  const stringLength = string.length;

  if (stringLength <= 1) return true;

  for (let index = 0; index < stringLength / 2; index++) {
    if (string[index] !== string[stringLength - 1 - index]) {
      return false;
    }
  }

  return true;
}

function isPalindromeTest() {
  const stringList = ['', 'hi', 'ANA', 'racecar'];

  for (string of stringList) {
    console.assert(isPalindrome(string), 'Ups! %s is not palindrome :/', string);
  }
}