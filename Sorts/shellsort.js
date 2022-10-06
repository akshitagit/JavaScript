shellSort = (array,gaps) => {
	for (var g = 0; g < gaps.length; g++) {
		var gap = gaps[g]
		for (var i = gap; i < array.length; i++) {
			var temp = array[i]
			for (var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
				array[j] = array[j - gap]
			}
			array[j] = temp
		}
	}
	return array
}

var array = [5,2,8,4,1,3,7,9,2,9,6]
var gaps = [66,31,14,5,1]
shellSort(array, gaps)
//(11) [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 9]





