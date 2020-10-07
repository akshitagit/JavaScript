/*

PROBLEM STATEMENT: Given an array of n integers, you need to find the maximum subarray sum, considering the fact that the array if circular. 
In other words of if the array if arr[]  then next value for the i-th index is i+1 if i <n else if i==n then next index i 0

SAMPLE TEST CASES:

INPUT
[-3, 3, 5, -2, 10, -30]
OUTPUT
16
EXPLANATION {3+5-2+10} = 16, no other subarray will give better result


INPUT
[10, -3, -2, 4, -1]
OUTPUT
13
EXPLANATION {4-1+10}=13  here 4, -1, 10 is considered. P.S remember the array is circular. 

*/


// SOLUTION:


// Implementation of kadane's algo 
var maxSubAraySum = function(arr){
    var sumSF = 0, res=0;
    for(var i=0; i<arr.length; i++){
        sumSF=Math.max(0, sumSF+arr[i]);
        res = Math.max(res, sumSF);
    }
    
    return res;
}
var maxSubarraySumCircular = function(A) {
    if(A.length==0) return 0;
    const maxi = Math.max(...A);
    if(maxi<=0) return maxi;
    
    const val1 = maxSubAraySum(A);
    var totalSum=0;
    for(var i=0; i<A.length; i++){
        totalSum += A[i];
        A[i]=-1*A[i];
    }
    const val2 = totalSum + maxSubAraySum(A);
    return Math.max(val1, val2);
    
};

/*
Solution Explanation:

First learn about Kadane's Algo, https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm 
We will be modifying the Kadane's Algo to find the maximum circular subarray sum. (mcss)

Now there are two cases:
1. The optimal subarray will be simply present in the array, without the requirement of wrapping around the ends. Example Sample test case 1


- - - - [- - - - - - - - -] - - - - -
        |<-optimal array->|

2. Now the optimal subarray will be wrapper around the edges. 
|- - - - - ]- - - - - - - [- - - - - - |
|left seg->|              |<- right seg|

That is there will be two segments one from left another from right. 


For the first case we will simply do Kadane. And store the result in val1,

For the second case if we look closely we will notice this relation
totalArray = leftSeg + MidLeftOutSeg + rightSeg

we need to find the leftSeg + rightSeg

or, leftSeg + rightSeg  = totalArray - MidLeftOutSeg


So basically we need to minimize the absolute value of MidLeftOutSeg. Do we need to write another function for finding the minimum value of MidLeftOutSeg ? NO!! we will simply invert the values of the array and then again apply Kadane's Algo to get the max "inverted" sum, which is nothing but the minimum sum. 

And then we will add( why add ? because we once inverted the signs and minus of minus makes plus. ) So we will val2. 

Now finally we will return the max value of val1 and val2

*/ 
