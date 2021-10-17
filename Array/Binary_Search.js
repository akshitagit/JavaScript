//JavaScript Implementation of Binary Search
<script>
let RecursiveFunction = function (arr, x, start, end) {
    
    if (start > end) return false;
  

    let mid=Math.floor((start + end)/2);
  

    if (arr[mid]===x) return true;
         

    if(arr[mid] > x)
        return RecursiveFunction(arr, x, start, mid-1);
    else
 
       
        return RecursiveFunction(arr, x, mid+1, end);
}
  

let arr = [11, 13, 15, 17, 18, 19];
let x = 17;
  
if (RecursiveFunction(arr, x, 0, arr.length-1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");
  
x = 6;
  
if (ReursiveFunction(arr, x, 0, arr.length-1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");
</script> 
