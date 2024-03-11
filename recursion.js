/* 
Recursion is a process (function) that calls itself. It is used in JSON.parse/JSON.stringify, document.getElementbyId and DOM traversal algorithms, object traversal, and is used in more complex data structures. It can provide a cleaner alternative to iteration.

Recursion must always have:
1) a base case - a condition when the recursion ends
2) different input

Example:
Write factorial iteravely vs. recursively.
*/

function factorialIterave(num) {
	let total = 1;
	for (let i = num; i > 1; i--) {
		total *= i;
	}
	return total;
}

function factorialRecursive(num) {
	if (num === 1) return 1;
	return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(5));
