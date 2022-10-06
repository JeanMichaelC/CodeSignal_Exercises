(() => {
	// My solution
	function solution(inputArray: number[]): number {
		let differenceNeeded = 0;
		let difference = 0;

		for (let i = 1; i < inputArray.length; i++) {
			if (inputArray[i] <= inputArray[i-1]) {
				difference = inputArray[i-1] + 1 - inputArray[i];
				differenceNeeded += difference;
				inputArray[i] = inputArray[i-1] + 1;
			}
		}

		return differenceNeeded;
	}

	
	// Great solutions of others
	// In this case I found no solution substantially different from mine
})
