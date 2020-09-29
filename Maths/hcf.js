//hcf FUNCTION
let hcf = function(a, b) {
  a = Math.abs(a)
  b = Math.abs(b)
  while (a != b) {
    if (a > b) a -= b
    else b -= a
  }
  return a
}

//TAKE INPUT N and append the next N inputs in array
var n = window.prompt("Enter N: ");
let arr = [];
for (let i=0; i<n; i++) {
    arr[i] = window.prompt('Enter:'+(i+1)+'th element');
}



let hcfArr = function(arr) {
  let hcfres = hcf(arr[0], arr[1])
  for (let i=3; i<arr.length; i++) {
    hcfres = hcf(hcfres, arr[i])
  }
  return hcfres
}

console.log(hcfArr(arr));