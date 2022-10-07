/*
    Input: word1 = "sea", word2 = "eat"
    Output: 2
    Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
*/


function min(i, j){
	return i > j ? j : i;
}

function max(i, j){
	return i > j ? i : j;
}

function solve(w1, w2, dp, i, j){
    // If we have traversed both the strings till the end at the same time,
    // that means there are no extra characters, so return 0.
    // (Is being handled by the below base case but just added to minimize a max 
    // operation on some large string sizes)
    if(i == w1.length && j == w2.length) return 0;
    
    // If one of the strings is traversed completely before the other, 
    // that means there are some extra characters in the other string, 
    // so we add the remaining length to our steps count.
    if(i == w1.length || j == w2.length) return max(w1.length-i, w2.length-j);
    
    
    // return the cached value.
    if(dp[i][j] != -1) return dp[i][j];
    
    // if both characters are same that means no need to remove those characters
    // from both the strings, so just increment the pointer for both strings.
    if(w1[i] == w2[j]) return solve(w1, w2, dp, i + 1, j + 1);
    
    // otherwise we add one to the step count and solve for minimum steps
    // from the options of removing from string w1 or w2.
    return dp[i][j] = 1 + min(solve(w1, w2, dp, i + 1, j), solve(w1, w2, dp, i, j + 1));
}
function minDistance(word1, word2) {
    let dp = Array(word1.length + 1).fill().map(() => Array(word2.length+1).fill(-1))
    return solve(word1, word2, dp, 0, 0);
}


let s1 = "sea";
let s2 = "eat";
console.log(minDistance(s1, s2));