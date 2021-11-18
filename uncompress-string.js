// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:
/* <number><char>
for example, '2c' or '3a' */
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s) => {
	const numbers = '0123456789';
	let result = [];
	let i = 0;
	let j = 0;
	while (j < s.length) {
		// iterates to find complete number before next alphabetic character
		if (numbers.includes(s[j])) {
			j += 1;
		} else {
			// slices number portion and assigns it to num
			const num = Number(s.slice(i, j));
			for (let count = 0; count < num; count += 1) {
				// pushes letter found at j num(i) number of times to result array
				result.push(s[j]);
			}
			j += 1;
			i = j;
		}
	}
	// turns result array into a string to meet solution requirements
	return result.join('');
};

uncompress('2c3a1t'); // -> 'ccaaat'
uncompress('4s2b'); // -> 'ssssbb'
uncompress('2p1o5p'); // -> 'ppoppppp'
uncompress('3n12e2z'); // -> 'nnneeeeeeeeeeeezz'
uncompress('127y'); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
