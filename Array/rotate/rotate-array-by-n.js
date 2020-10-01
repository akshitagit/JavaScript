function rotateArrayByN(array,n,direction = 'right') {
    if(direction === 'right') {
        return array.slice(n, array.length).concat(array.slice(0, n));
    } else if (direction === 'left') {
        return array.slice(-n).concat(array.slice(0,array.length-n));
    } else {
        return array;
    }
    
}

/** 
console.log(rotateArrayByN([1, 2, 3, 4, 5, 6, 7],2));
// Output  [3, 4, 5, 6, 7, 1, 2]

console.log(rotateArrayByN([1, 2, 3, 4, 5, 6, 7],2,'left'));
// Output [6, 7, 1, 2, 3, 4, 5]
*/