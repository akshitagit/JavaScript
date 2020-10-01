// Program implementing Linear Search

function linear(a,k)
{
   
  
    var t=0;
   
    
    for(var i=0; i<a.length; i++)
    {
        if(k==a[i])
        {
            t=1;
            break; // exit from for-loop if element is found
        }
    }
    if(t==1)
    {
        return "Element "+a[i]+ " Found at Position:"+i; // return if element is found
    }
    else
    {
        return "Element Not Found"; //return if element is not found
    }
}

console.log(linear([2,5,6,2,5,3,6,8],56)) // pass array and element to find in array