(() => {
	// My solution
	function solution(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
		return inputArray.map((currentElem) => currentElem == elemToReplace ? substitutionElem : currentElem);
	}

	// Great solutions of others
	// In this case I found no solution substantially different from mine
})
