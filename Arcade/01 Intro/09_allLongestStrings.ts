(() => {
	// My solution
	function allLongestStrings(inputArray: string[]): string[] {
		let maxLength = 0;
		inputArray.forEach((string) => {
			if (string.length > maxLength) {
				maxLength = string.length
			}
		});

		let longestStrings = inputArray.filter((string) => string.length === maxLength);

		return longestStrings;
	}


	// Great solutions of others 
	function taylor13(inputArray: string[]): string[] {
		return inputArray.filter(element => element.length == Math.max(...inputArray.map(element => element.length)));
	}


	function anatoly_r1(inputArray: string[]): string[] {
		const lengths = inputArray.map(item => item.length);
		const maxLength = Math.max(...lengths);
	
		return inputArray.filter(item => item.length === maxLength);
	}
	

	// My new solution based on answers from others 
	function myEnhancedSolution(inputArray: string[]): string[] {
		let maxLength = Math.max(...inputArray.map((string) => string.length));
		
		return inputArray.filter((string) => string.length === maxLength);
	}
})
