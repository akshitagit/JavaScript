// lets define an array
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// each element of the array is cubed and then flattened
const outputArray = numbersArray.flatMap((x) => [x ** 3]);

console.log('Output:', outputArray);

// Output: [1, 8, 27, 64, 125, 216, 343, 512, 729]