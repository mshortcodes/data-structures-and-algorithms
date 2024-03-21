/*
Bubble sort is a sorting algorithm which uses a nested loop to 'bubble' the largest values to the top. It compares adjacent elements and swaps them if one is greater than the other. On each pass, it sorts/bubbles a single number. This algorithm is optimized so that it performs one less comparison on each pass to prevent accessing out-of-bounds elements and comparing numbers that are already sorted.

Time complexity: O(n^2) - quadratic
Space complexity: O(1) - constant
*/

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			console.log(i, j, arr, arr[j], arr[j + 1]);
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));
