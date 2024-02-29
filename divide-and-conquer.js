/*
Divide and conquer is a problem-solving pattern which involves dividing a data set into smaller chunks and then repeating a process with a subset of data. It is used in binary search, merge sort, and quicksort algorithms.

Time complexity: O(log n) - logarithmic
Space complexity: O(1) - constant

Example:
Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.
*/

function search(arr, val) {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);

		if (arr[middle] < val) {
			min = middle + 1;
		} else if (arr[middle] > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}

	return -1;
}

console.log(`
${search([1, 2, 3, 4, 5, 6, 7], 4)}
${search([1, 2, 3, 4, 5, 6, 7], 7)}
${search([1, 2, 3, 4, 5, 6, 7], 8)}
`);
