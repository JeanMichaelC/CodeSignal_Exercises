(() => {
	// My solution
	function isDigit(symbol: string): boolean {
		let newNumber = parseFloat(symbol);
		let newString = newNumber.toString();

		return symbol === newString ? true : false;
	}


	// Great solutions of others
	function sofie_(symbol: string): boolean {
		return /[0-9]/.test(symbol);
	}


	function michael_g161(symbol: string): boolean {
		return !isNaN(Number(symbol));
	}


	const yaroslav_repeta = symbol => /\d/.test(symbol);
})
