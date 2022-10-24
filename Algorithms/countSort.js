let countingSort = (arr) => {
    let i = 0,
        j = 0,
        len = arr.length,
        count = [];
        let max = Math.min;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max) max = arr[i];
    }
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = 0; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};

