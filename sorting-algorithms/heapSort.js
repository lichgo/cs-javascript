function createHeap(arr) {
	var n = arr.length;
	for (var i = Math.floor(n / 2) - 1; i > -1; i--) {
		adjustHeap(arr, i, n);
	}
	return arr;
}

function adjustHeap(arr, i, n) {
	var j = 2 * i + 1,
		flag = 0,
		temp = arr[i];

	while (j < n && flag != 1) {
		if (j + 1 < n && arr[j] < arr[j + 1]) j++;

		if (temp > arr[j])
			flag = 1;
		else {
			arr[i] = arr[j];
			i = j;
			j = 2 * i + 1;
		}
	}

	arr[i] = temp;

	return arr;
}

console.log(createHeap(arr));

//Heap Sort: O(n * log2n) / O(1) / Unstable
function heapSort(arr) {
	createHeap(arr);

	for (var i = arr.length - 1; i > 0; i--) {
		var temp = arr[i];
		arr[i] = arr[0];
		arr[0] = temp;

		adjustHeap(arr, 0, i);
	}

	return arr;
}