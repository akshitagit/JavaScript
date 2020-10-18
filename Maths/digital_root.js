function digital_root (num){
  let i = 0;
  let num2 = num;
  let sum=0;
  while( num2 >= 1 ) {
    i++;
    num2 = num2/10;
    }
  while( i !== 0 ) {
    i=i-1;
    let mod = Math.floor(num/Math.pow(10,i));
    num = num % Math.pow(10,i)
    sum = sum + mod;
  }
  
  if (sum < 10) {
    return sum;
  } else {
    return digital_root (sum);
  };
}
