//Shell Sort: O(n(log2n)^2) / O(1) / Unstable
function shellSort(array, spans) {
	var len = array.length,
		iterations = spans.length;

	for (var i = 0; i < iterations; i++) {
		var span = spans[i];
		for (var k = 0; k < span; k++) {
			//using direct insert sort
			for (var j = k; j < len - span; j += span) {
				var temp = array[j + span];
				var h = j;
				while (h > -1 && temp < array[h]) {
					array[h + span] = array[h];
					h = h - span;
				}
				array[h + span] = temp;
			}
		}
	}

	return array;
}