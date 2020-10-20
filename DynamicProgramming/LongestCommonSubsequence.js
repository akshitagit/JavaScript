/*

Longest Common Subsequence is a classical example of how to use dynamic programming with memorization
to solve a complex problem in a much easier and faster way.

LCS Problem Statement: Given two sequences, find the length of longest subsequence present in both of them. 
A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. 
For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”.

The brute force method requires to find all possible subsequences of the given sequences and finding the longest common subsequence.
This approach has exponential time complexity.

LCS with Dynamic Programming approach requires only O(mn) time, where m and n are the lengths of the given sequences.

*/

function lcs(p, q, m, n, dp) {
  var result = 0;
  if (m === 0 || n === 0) {
    result = 0;
  } else if (dp[m - 1][n - 1] !== null) {
    //If LCS value is already calcualted for this substring
    result = dp[m - 1][n - 1];
  } else if (p[m - 1] === q[n - 1]) {
    //If last character in substrings are the same
    result = 1 + lcs(p, q, m - 1, n - 1, dp);
    dp[m - 1][n - 1] = result;
  } else {
    //If last character in substrings are different

    //find LCS by removing last character from string 1
    var temp1 = lcs(p, q, m - 1, n, dp);

    //find LCS by removing last character from string 2
    var temp2 = lcs(p, q, m, n - 1, dp);

    //take min of both results
    result = temp1 > temp2 ? temp1 : temp2;

    //set the value in Matrix
    dp[m - 1][n - 1] = result;
  }
  return result;
}

//input strings of size m and n
var str1 = "nematode_knowledge";
var str2 = "empty_bottle";

//Matrix of size mXn to store calculated values
var dp = [];

//Prefill the matrix with null
for (var i = 0; i < str1.length; i++) {
  dp[i] = [];
  for (var j = 0; j < str2.length; j++) {
    dp[i].push(null);
  }
}

console.log(lcs(str1, str2, str1.length, str2.length, dp));
