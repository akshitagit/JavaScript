/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

var climbStairs = function(n) {
    let arr = [n+1]
    arr[0] = 1;
    arr[1] = 1;
    for(let i = 2; i<n+1 ; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
};