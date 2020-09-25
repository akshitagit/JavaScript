/*

Selection sort is fairly simple. Assume the left part of your array is
sorted and right part is unsorted. Inititally the sorted(left) part is
empty. Now select the smallest element from the unsorted(right) part and
swap it with the first element of the unsorted(right) part. Now this element
is sorted, move to the next iteration and repeat without touch the sorted(left)
part.

*/
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let firstOfUnsorted = arr[i];

    // find the index of the smallest element in the unsorted part
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // swapping the minimum with first element of unsorted part
    arr[i] = arr[minIndex];
    arr[minIndex] = firstOfUnsorted;
  }
  return arr;
}

// This has the time complexity of O(n^2)
