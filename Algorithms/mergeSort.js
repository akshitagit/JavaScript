/**
 * @desc This function is responsible for splitting the incoming array into two halves
 * and then performs the mergeSort using recursion
 */

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  let middleIndex = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, middleIndex);
  let secondHalf = array.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

const merge = (array1, array2) => {
  let result = [];

  // Checks to see if both arrays are not empty
  while (array1.length && array2.length) {
    let minElem;
    if (array1[0] < array2[0]) {
      minElem = array1.shift();
    } else {
      minElem = array2.shift();
    }

    result.push(minElem);
  }

  // At this point, one array is totally empty and the other has at least one number left in it
  // so we do this to fix the issue
  if (array1.length) {
    result = result.concat(array1);
  } else {
    result = result.concat(array2);
  }
  return result;
};

console.log(mergeSort([-1, 2, 5, 300, 4, 3, 800, 90]));
