/* 
Linear search is a searching algorithm which goes through each element one by one searching for a match. It can start at the beginning or end of the data. It is used in built-in methods such as includes() and indexOf().

Time complexity: O(n) - linear
Space complexity: O(1) - constant

Example:
Write a function that accepts an array and a value. Return the index at which the value is found. If the value is not found, return -1.
*/

function linearSearch(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}

	return -1;
}

console.log(linearSearch([34, 56, 1, 2], 1));
