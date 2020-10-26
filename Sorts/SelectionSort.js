/*
Selection sort is fairly simple. Assume the left part of your array is
sorted and right part is unsorted. Inititally the sorted(left) part is
empty. Now select the smallest element from the unsorted(right) part and
swap it with the first element of the unsorted(right) part. Now this element
is sorted, move to the next iteration and repeat without touch the sorted(left)
part.
*/

export default SelectionSort = (arr) => {
  // function to swap the elements in the array
  const swap = (a,b) =>{
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  // the minIndex
  let minIndex;
  for(let i=0;i<arr.length; i++){
    // start with the i as minIndex
    minIndex = i;
    for(let j=0;j<arr.length;j++){
      // when you find new min value update the minIndex with j as new 
      if(arr[j]<arr[minIndex]){
        minIndex = j;
      }
    }
    if(i !== minIndex) swap(i, minIndex);
  }
  return arr;
}
