
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
  if((string === string.split("").reverse().join(""))){
    return true;
  }else{
    return false;
  }
}

function isPalindromeTest() {
  const stringList = ['', 'hi', 'ANA', 'racecar'];

  for (string of stringList) {
    console.log(isPalindrome(string), 'Ups! %s is not palindrome :/', string);
  }
}

isPalindromeTest();