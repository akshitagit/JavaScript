// What is Leonardo Number  ?
// The Leonardo numbers are a sequence of numbers given by the recurrence: 
//  if n == 0  then return 0  and if n == 1  then return 1
// if  n > 1 then  L(n) = L(n-1) + L(n-2) + 1

// For Example  if n = 3 then output is  5 (1,1,3,5)

function leonardo(n)
    {
        let num = [];
        num[0] = num[1] = 1;
        for (let i = 2; i <= n; i++)
            num[i] = num[i - 1] + num[i - 2] + 1;
        return num[n];
    }
     
    // Driver code
 
console.log(leonardo(3));