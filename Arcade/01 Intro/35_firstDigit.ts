(() => {
	// My solution
	function solution(inputString: string): string {
		let numberRegEx = /[0-9]/;

		for (let i = 0; i < inputString.length; i++) {
			if (numberRegEx.test(inputString[i])) {
				return inputString[i];
			}
		}
	}


	// Great solutions of others
	function belodpav(inputString: string): string {
		return inputString.match(/[0-9]/)![0];
	}
})
