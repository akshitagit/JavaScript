function binarySearch(arr = [], key) {
  var left = 0,
    right = arr.length - 1; // left index and right index of the array
  while (left <= right) {
    var middle = Math.floor((right + left) / 2);
    if (arr[middle] == key) return middle;
    else if (key > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 0));
