// Given an array of integers, reverse the given array in place using an index and loop, rather than a built-in function

function reverseArray(array) {
	let reverseArray = [];
	for (let i = array.length; i > 0; i--) {
		reverseArray.push(array[i - 1]);
	}
	return reverseArray;
}

// Or
function myReverse(array) {
	let reversed = [];
	for (let i = array.length - 1; i >= 0; i--) {
		reversed.push(array[i]);
	}
	return reversed;
}
