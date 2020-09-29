function partition(v, l, r){ // closed interval (range) [l, r]
    let c = v[r]
    let j = l
    for(var k = l; k < r; k++){
        if(v[k] <= c){
            [v[k], v[j]] = [v[j], v[k]]
            j++
        }
    }
    [v[j], v[r]] = [v[r], v[j]]
    return j;
}

function quicksort(v, l, r) { // closed interval (range) [l, r]
    let j;
    if(r<=l)
        return v;
    let mid = Math.floor((l+r)/2)
    if(v[r] < v[mid])
        [v[r], v[mid]] = [v[mid], v[r]]
    if(v[mid] < v[l])
        [v[l], v[mid]] = [v[mid], v[l]]
    if(v[mid] < v[r])
        [v[r], v[mid]] = [v[mid], v[r]]
    j = partition(v, l, r);
    quicksort(v, l, j-1);
    quicksort(v, j+1, r);
    return v;
}