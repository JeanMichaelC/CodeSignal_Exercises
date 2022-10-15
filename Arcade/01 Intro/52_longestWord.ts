(() => {
	// My solution
	function solution(text: string): string {
		text = text.replace(/[^a-zA-Z]/gi, ' ');
		let words = text.split(' ');
		let longestWord = '';

		words.forEach((currentWord) => {
			if (longestWord.length < currentWord.length) {
				longestWord = currentWord;
			}
		})

		return longestWord;
	}

	// Great solutions of others
	function vong_panha_h(text: string): string {
		let regex = /\w+/g;
		let arr: string[] = text.match(regex)!;
		return arr.reduce((accum, value) => accum.length > value.length ? accum : value);
	}

})
