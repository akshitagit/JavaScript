// Program implementing Linear Search

let args = process.argv;

args[2] = args[2].replace("[", "");
args[2] = args[2].replace("]", "");

let arr = args[2].split(",").map(Number);
key = Number(args[3]);
let keyFound = false;
let index = 0;
for (let i = 0; i < arr.length; i++) {
  if (Number(arr[i]) === key) {
    keyFound = true;
    index = i;
  }
}

if (keyFound === true) {
  console.log(`Key found at index: ${index}`);
} else {
  console.log("Key Not Found");
}
