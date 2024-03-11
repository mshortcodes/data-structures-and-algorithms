/*
Pure recursion doesn't use external variables or a helper function. Everything is contained in a single recursive function.
*/

function collectOddValues(arr) {
	let newArr = [];

	if (arr.length === 0) {
		return newArr;
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValues(arr.slice(1)));
	return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
