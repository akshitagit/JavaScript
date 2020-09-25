export default BubbleSort = function(arr) {
    n = arr.length;
    sorted_arr = arr

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n-i-1; j++){
            if(sorted_arr[j] > sorted_arr[i]){
                let tmp = sorted_arr[j];
                sorted_arr[j] = sorted_arr[i];
                sorted_arr[i] = tmp;
            }
        }
    }
}