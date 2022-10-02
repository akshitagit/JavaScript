const numbers = [1, 2, 3, 4, 5];

Array.prototype.customMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

Array.prototype.customFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

Array.prototype.customReduce = function (cb, initialValue) {
  let prevValue = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (prevValue) {
      prevValue = cb(prevValue, this[i], i, this);
    } else {
      prevValue = this[0];
    }
  }
  return prevValue;
};

console.log(numbers.customMap((number) => number * 2));
console.log(numbers.customFilter((number) => number > 2));
console.log(numbers.customReduce((prev, curr) => prev + curr, 0));
