// Two ways implemtation of Anagram

function checkAnagram (a, b) {
    var y = a.split("").sort().join(""),
        z = b.split("").sort().join("");
    console.log(z === y
        ? a + " and " + b + " are anagrams!"
        : a + " and " + b + " are not anagrams."
    );
}

function isAnagram(str1, str2) {

  if(str1 === str2) {
    return true;
  }

  let srt1Length = str1.length;
  let srt2Length = str2.length;

  if(srt1Length !== srt2Length) {
    return false;
  }

  var counts = {};

  for(let i = 0; i < srt1Length; i++) {
    let index = str1.charCodeAt(i)-97;
    counts[index] = (counts[index] || 0) + 1;
  }

  for(let j = 0; j < srt2Length; j++) {
    let index = str2.charCodeAt(j)-97;
    if (!counts[index]) {
      return false;
    }
    counts[index]--;
  }

  return true;
}