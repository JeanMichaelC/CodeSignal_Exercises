(() => {
	// My first solution: 
	// It didn't work because I missunderstood the question
	function firtsTry(sequence: number[]): boolean {
		let notRepeatingSequence = [... new Set(sequence)];

		if ((sequence.length - notRepeatingSequence.length) > 1) {
			return false;
		}
		return true;
	}

	// My solution
	function almostIncreasingSequence(sequence: number[]): boolean {
		let counterBack = 0;
		let counterForward = 0;
		for (let i = 1; i < sequence.length; i++) {
			if (sequence[i] <= sequence[i - 1]) {
				counterBack++;
			}
			if (sequence[i - 1] >= sequence[i + 1]) {
				counterForward++;
			}
			if (counterBack > 1 || counterForward > 1) {
				return false;
			}
		}
		return true;
	}


	// Great solutions of others
	function razmondtan(sequence: number[]): boolean {
    let found = 0
    for (let i = 0; i < sequence.length; i++) {
        if(sequence[i] <= sequence[i-1]) {
            found++
            if (found > 1) {
                return false
            }
            if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
                return false
            }
        }
    } 
    return true
}
})
