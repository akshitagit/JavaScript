function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }
}

// Example usage:
var arr = [7, 2, 1, 6, 5, 3, 8, 4];
insertionSort(arr);
console.log(arr.toString());
