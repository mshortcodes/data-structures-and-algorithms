/* 
Binary search is a searching algorithm which repeatedly divides the data in half. It uses the divide and conquer problem-solving pattern. For binary search, the array must be sorted.

Time complexity: O(log n) - logarithmic

Exercise:
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
*/

function binarySearch(arr, num) {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);

	while (arr[middle] !== num && start <= end) {
		if (num < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	return arr[middle] === num ? middle : -1;
}

console.log(
	binarySearch(
		[
			5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
			96, 98, 99,
		],
		35
	)
);
