(() => {
	// My solution
	function isLucky(n: number): boolean {
		let arrayOfChars = Array.from(n.toString());
		let arrayOfNumbers = arrayOfChars.map((char) => Number(char));

		let firstHalfOfNumbers = arrayOfNumbers.slice(0, arrayOfNumbers.length / 2);
		let secondHalfOfNumbers = arrayOfNumbers.slice(arrayOfNumbers.length / 2);

		let firstHalfSum = firstHalfOfNumbers.reduce((total, value) => total + value);
		let secondHalfSum = secondHalfOfNumbers.reduce((total, value) => total + value);

		return firstHalfSum === secondHalfSum ? true : false;
	}


	// Great solutions of others
	function morrghana(n: number): boolean {
		let str = n.toString();
		let arr = str.split('');
		let first = 0;
		let last = 0;
		let len = arr.length;
		for (let i = 0; i < len / 2; i++) {
			first += +arr[i];
			last += +arr[len - i - 1];
		}

		if (first == last)
			return true;
		return false;
	}


	function doc999tor(n: number): boolean {
		var digits = n.toString().split('')
		return sum(digits.slice(0, digits.length / 2)) === sum(digits.slice(digits.length / 2))
	}
	function sum(arr: string[]): number {
		return arr.reduce((sum, v) => sum + Number(v), 0)
	}


})
