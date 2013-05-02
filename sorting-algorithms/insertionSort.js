//Insertion Sort: O(n^2) / O(1) / Stable
function insertSort(array) {
	var len = array.length;
	for (var i = 0; i < len - 1; i++) {
		var temp = array[i + 1];
		var j = i;
		while (j > -1 && temp < array[j]) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = temp;	//CAREFUL: J + 1
	}
	return array;
}