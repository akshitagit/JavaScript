let arr = process.argv[2].replace("[", "");
arr = arr.replace("]", "");
arr = arr.split(",").map(Number);
const x = Number(process.argv[3]);
const n = Number(process.argv[4]);
// Finding block size to be jumped
step = Math.sqrt(n);

// Finding the block where element is
// present (if it is present)
prev = 0;
while (arr[parseInt(Math.min(step, n) - 1)] < x) {
  prev = step;
  step += Math.sqrt(n);
  if (prev >= n) {
    console.log(-1);
    return;
  }
}

// Doing a linear search for x in
// block beginning with prev.
while (arr[parseInt(prev)] < x) {
  prev += 1;

  // If we reached next block or end
  // of array, element is not present.
  if (prev == Math.min(step, n)) {
    console.log(-1);
    return;
  }
}

// If element is found
if (arr[parseInt(prev)] == x) {
  console.log(prev);
}
