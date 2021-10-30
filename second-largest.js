function secondLargest(arr, arr_length) {
	let largest = Number.NEGATIVE_INFINITY;
	let second = Number.NEGATIVE_INFINITY;

	// Array must contain at least two elements to be valid
	if (arr_length < 2) {
		return console.log(`Invalid entry`);
	}

	// Find the largest element
	for (let i = 0; i < arr_length; i++) {
		if (arr[i] > largest) {
			largest = arr[i];
		}
	}

	// Find the second largest element
	for (let i = 0; i < arr_length; i++) {
		if (arr[i] > second && arr[i] < largest) {
			second = arr[i];
		}
	}

	if (second == Number.NEGATIVE_INFINITY) {
		return console.log(`Second largest element does not exist`);
	} else return console.log(`Second largest element is ${second}`);
}

let arr = (Nums = [2, 15, 3, 45, 7, 45, 56, 88]); // Output: 56
let arr_length = arr.length;
secondLargest(arr, arr_length);
