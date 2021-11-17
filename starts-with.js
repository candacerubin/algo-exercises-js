// Implement a function startsWith(start).
// It should accept a single parameter start and return a function that takes a string s and checks if s starts with start.
// start is a string that consists of one or more characters
// If s passes the check, the closure should return true, otherwise - false

const startsWith = (start) => {
	return (s) => {
		return s.indexOf(start) === 0;
	};
};

const words = [
	'good',
	'god',
	'goblin',
	'grand',
	'giga',
	'mega',
	'force',
	'joy',
	'giggle',
	'global',
	'function',
];

console.log(words.filter(startsWith('g')));
console.log(words.filter(startsWith('go')));
console.log(words.filter(startsWith('f')));
