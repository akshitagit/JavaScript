export default SelectionSort = function (arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    // Set the minimum to this position.
    min_index = i;

    // Looking for a smaller number in the unsorted subarray.
    for (let j = i + 1; j < n; j++) {
      // If find one, set the minimum to this position.
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }

    // If the current minimum index is not the minimum index you started with, swap the elements.
    if (min_index != i) {
      let temp = arr[i];
      arr[i] = arr[min_index];
      arr[min_index] = temp;
    }
  }
  return arr;
};
