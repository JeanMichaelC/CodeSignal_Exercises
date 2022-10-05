(() => {
	// My first solution	
	function firstTry(a: number[], b: number[]): boolean {
		let swapCount = 0;
		let firstOne: number;
		let secondOne: number;

		for (let i = 0; i < a.length; i++) {
			firstOne = b[i];
			secondOne = b[i + 1];
			if (a[i] !== b[i]) {
				swapCount += 1;
				if (swapCount > 1) {
					return false;
				} else {
					b[i] = secondOne;
					b[i + 1] = firstOne;
				}
			}
		}

		return true;
	}


	// My solution
	function solution(a: number[], b: number[]): boolean {
		let differencesCount = 0;
		let sortedA = [...a].sort((a, b) => a - b);
		let sortedB = [...b].sort((a, b) => a - b);
		debugger;

		if (sortedA.join('') !== sortedB.join('')) {
			return false;
		}

		for (let i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) {
				differencesCount++;
				if (differencesCount > 2) {
					return false;
				}
			}
		}

		return true;
	}


	// Great solutions of others
	function wanicode(a: number[], b: number[]): boolean {
		const ad = a.filter((v, i) => v != b[i])
		const bd = b.filter((v, i) => v != a[i])
		return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
	}


})
