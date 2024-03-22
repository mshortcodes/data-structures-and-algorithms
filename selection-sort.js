/*
Selection sort is a sorting algorithm similar to bubble sort, but instead of placing large values into sorted position, it places small values into sorted position. On each pass of the outer loop, it sorts the smallest number into position.

Time complexity: O(n^2) - quadratic
Space complexity: O(1) - constant
*/

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		[arr[i], arr[lowest]] = [arr[lowest], arr[i]];
	}
	return arr;
}

console.log(selectionSort([1, 4, 3, 2]));
