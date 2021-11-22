// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'

const compress = (s) => {
	let result = [];
	let i = 0;
	let j = 0;
	while (j <= s.length) {
		if (s[i] === s[j]) {
			j += 1;
		} else {
			const num = j - i;
			if (num === 1) {
				result.push(s[i]);
			} else {
				result.push(String(num), s[i]);
			}
			i = j;
		}
	}
	return console.log(result.join(''));
};

compress('ccaaatsss');
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
compress(
	'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
);
