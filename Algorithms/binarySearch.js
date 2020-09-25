/**
 * Binary search is an efficient algorithm for finding an item from a sorted list of items.
 * It works by repeatedly dividing in half the portion of the list that could contain the item,
 * until you've narrowed down the possible locations to just one.
 */

function binarySearch(arr, x, left, right) {
  if (left > right) {
    return false;
  }

  const middle = Math.floor(left + (right - left) / 2);
  if (arr[middle] === x) {
    return true;
  } else if (x < arr[middle]) {
    return binarySearch(arr, x, left, middle - 1);
  } else {
    return binarySearch(arr, x, middle + 1, right);
  }
}

export default function (arr, x) {
  return binarySearch(arr, x, 0, arr.length);
}
