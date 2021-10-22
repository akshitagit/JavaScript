//Bit Manipulation in javascript

// Function to get the bit at the ith position
function getBit(num, i)
{
    // Return true if the ith bit is set. Otherwise return false
    return ((num & (1 << i)) != 0);
}
 
// Function to set the ith bit of the given number num
function setBit(num, i)
{
    // Sets the ith bit and return the updated value
    return num | (1 << i);
}
 
// Function to clear the ith bit of the given number N
function clearBit(num, i)
{
 
    // Create the mask for the ith bit unset.
    let mask = ~(1 << i);
    return num & mask;
}
 
// Driver code for given number N
let N = 90;
 
document.write("The bit at the 3rd position is: " +
              (getBit(N, 3) ? '1' : '0') + "</br>");
 
document.write("The value of the given number " +
               " after setting the bit at " +
               " MSB is: " + setBit(N, 0) + "</br>");
 
document.write("The value of the given number " +
               " after clearing the bit at " +
               " MSB is: " + clearBit(N, 0) + "</br>");
                