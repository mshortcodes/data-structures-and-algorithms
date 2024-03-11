/* 
Helper method recursion has an outer and inner function. The outer function defines a variable with a separate scope and calls the inner recursive function which updates the variable. This prevents the result from being empty each time.
*/

function collectOddValues(arr) {
	let result = [];

	function helper(helperInput) {
		if (helperInput.length === 0) {
			return;
		}

		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}

		helper(helperInput.slice(1));
	}

	helper(arr);

	return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
