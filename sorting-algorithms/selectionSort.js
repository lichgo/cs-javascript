//Selection Sort: O(n^2) / O(1) / Stable
function selectionSort(array) {
	var len = array.length;
	for (var i = 0; i < len; i++) {
		var min = i;
		for (var j = i + 1; j < len; j++) {
			if (array[j] < array[min]) min = j;
		}
		//swap i and min
		if (min != i) {
			var temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		}
	}
	return array;
}