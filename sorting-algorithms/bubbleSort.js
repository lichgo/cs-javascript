//Bubble Sort: O(n^2) / O(1) / Stable
function bubbleSort(arr) {
	var n = arr.length,
		flag = 0,	//no swap
		i = n;

	while (i > 0 && flag != 0) {
		for (var j = 0; j + 1 < i; j++) {
			if (arr[j] > arr[j + 1]) {
				//swap the two number
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				//mark the flag
				flag = 1;
			}
		}
		i--;
	}

	return arr;
}