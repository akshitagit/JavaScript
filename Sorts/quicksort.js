  function   quicksort(arr, start,  end)
    {
    if (start < end) {
        let p = partition(arr, start, end);
        quicksort(arr, 0, p - 1);
        quicksort(arr, p + 1, end);

    }

}

function partition( arr,  start,  end) {
    let p = start;
    let pivot = arr[end];
    for (let i = start; i < end; i++) {
        if (arr[i] >= pivot) {
            let temp = arr[i];
            arr[i] = arr[p];
            arr[p] = temp;
            p++;

        }
    }
    let temp = arr[p];
    arr[p] = arr[end];
    arr[end] = temp;
    return p;
}
var arr = [ 7, 2, 1, 6, 5, 3, 8, 4 ];
    quicksort(arr, 0, arr.length - 1);
    console.log(arr.toString())