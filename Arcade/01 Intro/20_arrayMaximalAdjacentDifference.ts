(() => {
	// My solution
	function solution(inputArray: number[]): number {
		let maxDifference = 0;
		for (let i = 0; i < inputArray.length -1; i++) {
				let numbers = [inputArray[i], inputArray[i+1]];
				let bigNumber = Math.max(...numbers);
				let smallNumber = Math.min(...numbers);
				
				let currentDifference = bigNumber - smallNumber;
				
				if (maxDifference < currentDifference) {
						maxDifference = currentDifference;
				}
		}
		
		return maxDifference;
	}
	

	// Great solutions of others
	function doc999tor(inputArray: number[]): number {
    var maxDiff = 0
    for (var i = 0; i < inputArray.length-1; i++) {
        if (Math.abs(inputArray[i] - inputArray[i+1]) > maxDiff) {
            maxDiff = Math.abs(inputArray[i] - inputArray[i+1])
        }
    }
    return maxDiff
}
}) 
