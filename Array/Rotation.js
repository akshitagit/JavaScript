/**
 * A function that takes 3 parameters to make a rotation in an array.
 * @example arr=[1,2,3,4,5,6,7,8,9], rotation(arr, 3, "right") returns [4,5,6,7,8,9,1,2,3]
 * @function
 * @param {Array} arr - The array to rotate.
 * @param {Number} n - The number of rotations.
 * @param {string} direction - The direction of the rotation.
 * @returns {Array}
 */

const rotation = (arr, n, direction) => {
  if (direction === "right") {
    for (let i = 0; i < n; i++) {
      let firstElement = arr.shift();
      arr.push(firstElement);
    }
  } else {
    for (let i = 0; i < n; i++) {
      let lastElement = arr.pop();
      arr.unshift(lastElement);
    }
  }
  return arr;
};

export default rotation;
