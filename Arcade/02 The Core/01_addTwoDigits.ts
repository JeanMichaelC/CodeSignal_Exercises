(() => {
	// My solution
	const addTwoDigits = (n: number): number => {
		let numbersCharArray = n.toString().split('');
		let numberArray = numbersCharArray.map((char) => Number(char))

		return numberArray[0] + numberArray[1];
	}



	// Great solutions of others
	function belodpav(n: number): number {
		return Math.floor(n / 10) + n % 10;
	}



	function sofie_(n: number): number {
		return parseInt([...n.toString()][0]) + parseInt([...n.toString()][1]);
	}



	function mokahaiku(n: number): number {
		return [...String(n)].reduce((r, v) => r + Number(v), 0)
	}


})
