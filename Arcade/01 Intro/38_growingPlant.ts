(() => {
	// My solution
	function solution(upSpeed: number, downSpeed: number, desiredHeight: number): number {
		let plantHeight = upSpeed;
		let numberOfDays = 1;

		while (plantHeight < desiredHeight) {
			plantHeight = plantHeight - downSpeed + upSpeed;
			numberOfDays++;
		}

		return numberOfDays;
	}


	// Great solutions of others
	function belodpav(upSpeed: number, downSpeed: number, desiredHeight: number): number {
		if (desiredHeight <= upSpeed) return 1;
		return Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
	}
})
