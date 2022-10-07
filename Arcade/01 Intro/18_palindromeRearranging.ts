(() => {
	// My first solution
	function firstTry(inputString: string): boolean {
		let reverseString = inputString.split('').reverse().join('');

		return inputString === reverseString ? true : false;
	}

	// My solution
	function palindromeRearranging(inputString: string): boolean {
		let sortedCharsArray = inputString.split('').sort();
		let oddChars = 0;
		let currentCharCount = 0;

		for (let i = 0; i < sortedCharsArray.length; i++) {
			let currentChar = sortedCharsArray[i];
			let nextChar = sortedCharsArray[i + 1];

			currentCharCount++;

			if (currentChar !== nextChar) {
				if (currentCharCount % 2 !== 0) {
					oddChars++;
				}
				currentCharCount = 0;
				if (oddChars > 1) {
					return false;
				}
			}
		}
		return true;
	}


	// Great solutions of others
	function belodpav(s: string): boolean {
		const set = new Set();

		s.split('').forEach((x) => {
			if (set.has(x)) set.delete(x);
			else set.add(x);
		});

		return set.size <= 1;
	}


	function nonononono(inputString: string): boolean {

		let chars = new Array(26).fill(0);

		for (let char of inputString.split('')) {
			let index = char.charCodeAt(0) - "a".charCodeAt(0);
			chars[index]++;
		}

		return chars.filter(el => el % 2 == 1).length < 2;
	}
})
