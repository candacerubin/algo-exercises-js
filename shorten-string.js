// Implement the function shorten(s, n).
// It should shorten the string to the first 'n' chars and add '...' if the shortening did happen.
// Only full words can be included in the result.

function shortenByWords(s, n) {
	n >= s.length ? s : (s = `${s.slice(0, n)}...`);
	return s;
}

const longString =
	'this string is quiteeeeeeeeeeeeeee long, especially for its age.';
const shortString = 'a short one';

console.log(shortenByWords(longString, 20));
console.log(shortenByWords(shortString, 20));
