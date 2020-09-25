var Array = [96, 5, 42, 1, 6, 37, 21] // Function - Insertion Sort Algo.
function insertionSort(unsortedArray) {
    for (let i = 1; i < unsortedArray.length; i++) {
        let current = unsortedArray[i];
        let j;
        for (j = i - 1; j >= 0 && unsortedArray[j] > current; j--) {
            unsortedArray[j + 1] = unsortedArray[j]
        }
        unsortedArray[j + 1] = current;
    }
    return unsortedArray;
}
// print sorted array
console.log(insertionSort(Array));