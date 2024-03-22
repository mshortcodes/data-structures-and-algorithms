/*
Insertion sort is a sorting algorithm which builds up the sort by gradually creating a larger left half which is always sorted. It takes an element, one at a time, and 'inserts' it in the correct spot on the left half.

Time complexity: O(n^2) - quadratic
Space complexity: O(1) - linear
*/

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		let j;
		for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}

console.log(insertionSort([6, 8, 74, 52]));
