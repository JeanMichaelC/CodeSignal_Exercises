(() => {
	// My solution
	function checkPalindrome(inputString: string): boolean {
		let reverseString = inputString.split("").reverse().join("");

		return inputString === reverseString ? true : false;
	}

	// Great solutions of others
	const ggzor = (inputString: string) => inputString.split("").reverse().join("") == inputString;


	function jacob_d22(inputString: string): boolean {
		return inputString === [...inputString].reverse().join('');
	}


	function morrghana(inputString: string): boolean {
		let reversed = inputString.split('').reverse().join('');
		if (inputString === reversed)
			return true;
		return false;
	}
})
