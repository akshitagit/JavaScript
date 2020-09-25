// Can be used to shuffle the items of an array.
// This algorithm is called Fisher Yates Shuffle.

export default RandomSort = function(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let j = Math.floor((i+1)*Math.random());
        let shuffled_arr = arr;

        let tmp = shuffled_arr[i];
        shuffled_arr[i] = shuffled_arr[j];
        shuffled_arr[j] = tmp;        
    }

    return shuffled_arr;
}
