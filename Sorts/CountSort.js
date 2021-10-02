// Count sort counts the frequencies of elements and
// creates a new array inserting elements by their frequencies.
// Suitable for a sorting arrays within short range
// Time complexity: O(n)
// Space required: O(n+m)

export default CountSort = (arr)=>{
    const n = arr.length;
    let maxElement = 0;
    
    for(let i=0; i<n; i++){
        if(arr[i]>maxElement){
            maxElement=arr[i];
        }
    }

    let counts = new Array(maxElement+1);

    for(let i=0; i<=maxElement; i++){
        counts[i]=0;
    }

    for(let i=0; i<n; i++){
        counts[arr[i]]++;
    }

    let newArray = new Array(n);
    
    let c=0;

    for(let i=0; i<=maxElement; i++){
        while(counts[i]>0){
            newArray[c++] = i;
            counts[i]--;   
        }
    }

    return newArray;
}
