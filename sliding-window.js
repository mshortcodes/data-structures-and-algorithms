/*
Sliding window is a problem-solving pattern which finds a subarray or substring and 'slides' through the data by expanding and shrinking (- and +). 

Time complexity: O(n) - linear
Space complexity: O(1) - constant

Example:
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
*/

function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;

	if (arr.length < num) {
		return null;
	}

	// loop num times and create first sum
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	tempSum = maxSum;

	// subtract number before the new window and add new number
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(tempSum, maxSum);
	}

	return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
