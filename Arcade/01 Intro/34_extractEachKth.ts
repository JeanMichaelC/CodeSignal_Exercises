(() => {
	// My solution
	function solution(inputArray: number[], k: number): number[] {
		let newArray: number[] = [];
		for (let i = 1; i <= inputArray.length; i++) {
			if (i % k !== 0) {
				newArray.push(inputArray[i - 1]);
			}
		}

		return newArray;
	}

	// Great solutions of others
	function belodpav(inputArray: number[], k: number): number[] {
		return inputArray.filter((x, i) => (i + 1) % k !== 0);
	}
})
