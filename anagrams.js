// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
	if (s1.length !== s2.length) return false;

	const lookup = {};

	for (let i = 0; i < s1.length; i++) {
		let letter = s1[i];
		// if letter exists, increment, otherwise set to 1
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}
	for (let i = 0; i < s2.length; i++) {
		let letter = s2[i];
		// if no letter exists, or letter === zero anagram is false
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}
	return true;
};

// Solution using for/of loop
// const anagrams = (s1, s2) => {
//   const count = {};
//   for (let char of s1) {
//     if (!(char in count)) {
//       count[char] = 0;
//     }
//     count[char] += 1;
//   }

//   for (let char of s2) {
//     if (count[char] === undefined) {
//       return false;
//     } else {
//       count[char] -= 1;
//     }
//   }

//   for (let char in count) {
//     if (count[char] !== 0) {
//       return false;
//     }
//   }

//   return true;
// };

console.log(anagrams('restful', 'fluster')); // -> true
console.log(anagrams('cats', 'tocs')); // -> false
console.log(anagrams('monkeyswrite', 'newyorktimes')); // -> true
console.log(anagrams('paper', 'reapa')); // -> false
console.log(anagrams('elbow', 'below')); // -> true
console.log(anagrams('tax', 'taxi')); // -> false
console.log(anagrams('taxi', 'tax')); // -> false
console.log(anagrams('night', 'thing')); // -> true
console.log(anagrams('abbc', 'aabc')); // -> false
