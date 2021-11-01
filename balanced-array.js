function balancedArray(arr) {
	//function to find pivot index
	let pivot = -1;
	let leftSum, rightSum;
	for (let i = 0; i < arr.length; i++) {
		leftSum = 0;
		rightSum = 0;
		for (let j = 0; j < i; j++) leftSum += arr[j];
		for (let j = i + 1; j < arr.length; j++) rightSum += arr[j];
		if (leftSum == rightSum) {
			//if both sum are equal, then assign the index of pivot, and stop the iteration
			pivot = i;
			break;
		}
	}
	return pivot; //return index of pivot
}

let arr = [1, 2, 3, 4, 6];
console.log(balancedArray(arr));
