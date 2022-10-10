// n = 10  , output : 1,2,5,10

function printDivisors(n)
{
    for (i=1;i<=n;i++){
        if (n%i==0){
            console.log(i)
        }
    }        
}

function printDivisorsOptimized(n)
{    
    for(let i = 1; i <= Math.sqrt(n); i++)
    {
        if (n % i == 0)
        {
            if (parseInt(n / i, 10) == i){
                 console.log(i)
            }
            else{
                console.log(i)
                console.log(parseInt(n / i, 10));
            }
        }
    }
}
 
printDivisors(10)   // Time Complexity  :  O(n)
printDivisorsOptimized(10)   // Time Complexity : O ( sqrt(n))

