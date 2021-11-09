/**
 * Implement the function capitalizeEachWord(s).
 *
 * It should accept a string, turn the first letter of each word to uppercase and return the result.
 *
 * */

function capitalizeEachWord(s) {
	let words = s
		.split(' ')
		.map((word) => `${word.slice(0, 1).toUpperCase()}${word.substr(1)}`)
		.join(' ');
	return words;
}

const s = 'london is the capital of great britain.';

console.log(capitalizeEachWord(s));
