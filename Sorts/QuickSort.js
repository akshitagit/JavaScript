/* QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. 
   Time complexity:-
   Average case- n*log(n) where n is the size of the list
   Worst case- n*n where n is the size of the list */
var items = [ 9, 2, 7, 8, 4, 3 ];
function swap(items, leftIndex, rightIndex) {
	var temp = items[leftIndex];
	items[leftIndex] = items[rightIndex];
	items[rightIndex] = temp;
}
function partition(items, left, right) {
	var pivot = items[Math.floor((right + left) / 2)], //middle element
		i = left, //left pointer
		j = right; //right pointer
	while (i <= j) {
		while (items[i] < pivot) {
			i++;
		}
		while (items[j] > pivot) {
			j--;
		}
		if (i <= j) {
			swap(items, i, j); //sawpping two elements
			i++;
			j--;
		}
	}
	return i;
}

function quickSort(items, left, right) {
	var index;
	if (items.length > 1) {
		index = partition(items, left, right); //index returned from partition
		if (left < index - 1) {
			//more elements on the left side of the pivot
			quickSort(items, left, index - 1);
		}
		if (index < right) {
			//more elements on the right side of the pivot
			quickSort(items, index, right);
		}
	}
	return items;
}
// first call to quick sort
console.log('Before:');
console.log(items); //prints [9,2,7,8,4,3]
var sortedArray = quickSort(items, 0, items.length - 1);
console.log('After:');
console.log(sortedArray); //prints [2,3,4,7,8,9]
