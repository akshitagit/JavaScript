function sum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function memoizeSum(func) {
  const cache = {};
  return function (...args) {
    const arg = args[0];
    if (cache[arg]) {
      console.log("PRESENT IN CACHE");
      return cache[arg];
    } else {
      console.log("CALCULATING...");
      const result = func(arg);
      cache[arg] = result;
      return result;
    }
  };
}

const memoizedSum = memoizeSum(sum);

console.time();
console.log(memoizedSum(5));
console.timeEnd();

console.time();
console.log(memoizedSum(5));
console.timeEnd();
