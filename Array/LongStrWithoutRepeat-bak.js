// Q. Find longest substring without repeating characters

function longStr(s) {
  const seen = new Map();
  let start = 0;
  let maxlen = 0;
  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i])) {
      start = Math.max(seen.get(s[i]) + 1, start);
    }
    seen.set(s[i], i);
    maxlen = Math.max(i - start + 1, maxlen);
  }
  return maxlen;
}
console.log(longStr("abcab"));
