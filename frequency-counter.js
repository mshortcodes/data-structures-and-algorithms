/*
Frequency counter is a problem solving pattern used to count the frequency of elements in an array, string, or other collection. It uses an object to track the count of the elements. This solution uses two separate loops rather than a nested loop.

Time complexity: O(n)

Anagram challenge:
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/

function isAnagram(str1, str2) {
	// immediately return if strings don't match length
	if (str1.length !== str2.length) {
		return false;
	}

	// will store letters and counts
	const counter = {};

	for (let i = 0; i < str1.length; i++) {
		let letter = str1[i];
		// if letter exists, increment, otherwise set to 1
		counter[letter] ? (counter[letter] += 1) : (counter[letter] = 1);
	}

	for (let i = 0; i < str2.length; i++) {
		let letter = str2[i];
		// can't find letter or letter is zero then it's not an anagram
		if (!counter[letter]) {
			return false;
		} else {
			counter[letter] -= 1;
		}
	}

	return true;
}

console.log(`
${isAnagram('cinema', 'iceman')}
${isAnagram('racecar', 'carrace')}
${isAnagram('anagram', 'nagaramm')}
`);
