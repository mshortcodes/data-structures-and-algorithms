/*
Multiple pointers is a problem-solving pattern used in a linear structure (array, string, linked list). Normally the data is sorted (not required). It uses two or more pointers (variables) to search for a pair of values or something that meets a condition. The two pointers correspond to an index or position and move toward the beginning, middle, or end based on a certain condition.

Time complexity: O(n) - linear
Space complexity: O(1) - constant

sumZero challenge:
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/

function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

console.log(`
${sumZero([-3, -2, -1, 0, 1, 2, 3])}
${sumZero([-3, 2, 0, 1, 4, 7])}
`);
