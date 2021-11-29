// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
	let count = {};

	for (let char of s) {
		if (!(char in count)) {
			count[char] = 0;
		}
		count[char] += 1;
	}
	let first = null;
	for (let char of s) {
		if (first === null || count[char] > count[first]) {
			first = char;
		}
	}
	return first;
};

console.log(mostFrequentChar('bookeeper')); // -> 'e');
console.log(mostFrequentChar('david')); // -> 'd'
console.log(mostFrequentChar('abby')); // -> 'b'
console.log(mostFrequentChar('mississippi')); // -> 'i'
console.log(mostFrequentChar('potato')); // -> 'o'
console.log(mostFrequentChar('eleventennine')); // -> 'e'
console.log(mostFrequentChar('riverbed')); // -> 'r'
