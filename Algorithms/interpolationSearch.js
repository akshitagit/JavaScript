/**
 * @description - This function implements the interpolation search algorithm 
 * @param {Array} arr - The array to be searched
 * @param {Number} x - The element to be searched
 * @returns {Number} - The index of the element if found, else -1
 * @example
 *  interpolationSearch([1, 2, 3, 4, 5], 3) // returns 2
 *  interpolationSearch([1, 2, 3, 4, 5], 6) // returns -1
 *  interpolationSearch([1, 2, 3, 4, 5], 1) // returns 0
 * 
 * ### Time Complexity
  * Best Case: O(1)
  * Average Case: O(log(log(n)))
  * Worst Case: O(n)
  * 
  * ### Space Complexity
  * O(1)
  * 
  ### Explanation of the algorithm
  * The interpolation search algorithm is an improvement over the binary search algorithm.
  * The interpolation search algorithm works on the probing position of the required value.
  * For this algorithm to work properly, the data collection should be in a sorted form and equally distributed.
  * The idea of formula is to return higher value of pos when element to be searched is closer to arr[hi]. And smaller value when closer to arr[lo]
  * 
  * ### Pseudocode
  * 1. Find the position to be searched
  * 2. If it is a match, return the index of the item, and exit.
  * 3. If the item is less than arr[pos], calculate the probe position of the left sub-array. Otherwise calculate the same in the right sub-array.
  * 4. Repeat until a match is found or the sub-array reduces to zero.
 */

const interpolationSearch = (arr, x) => {
  let lo = 0; // lower bound
  let hi = arr.length - 1; // upper bound
  while (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
    // check if x is in range of the array
    if (lo === hi) {
      // if lower bound is equal to upper bound
      if (arr[lo] === x) return lo; // if the element is found, return the index
      return -1; // else return -1
    }
    let pos =
      lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo])); // calculate the probe position
    if (arr[pos] === x) return pos; // if the element is found, return the index
    if (arr[pos] < x)
      lo =
        pos +
        1; // if the element is less than the element at pos, update the lower bound
    else hi = pos - 1; // else update the upper bound
  }
  return -1; // if the element is not found, return -1
};

module.exports = interpolationSearch;

console.log(interpolationSearch([1, 2, 3, 4, 5], 3)); // returns 2
console.log(interpolationSearch([1, 2, 3, 4, 5], 6)); // returns -1
console.log(interpolationSearch([1, 2, 3, 4, 5], 1)); // returns 0
