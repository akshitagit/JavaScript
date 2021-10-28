function armstrongNumber(n) {
  var sum = 0;
  var originalNum = n;

  while (n > 0) {
    var lastdigit = n % 10;
    sum += Math.pow(lastdigit, 3);
    n = parseInt(n / 10);
  }

  if (sum == originalNum) {
    return true;
  } else {
    return false;
  }
}

var number = 407;
console.log(`${number} is Armstrong Number? ${armstrongNumber(number)}`);
