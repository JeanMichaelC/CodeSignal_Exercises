(() => {
	// My solution
	function solution(inputString: string): string {
		let shiftedString = '';

		for (let i = 0; i < inputString.length; i++) {
			if (inputString[i] === 'z') {
				shiftedString + String.fromCharCode(inputString.charCodeAt(i) - 25);
			} else {
				shiftedString + String.fromCharCode(inputString.charCodeAt(i) + 1);
			}
			console.log(shiftedString);
		}

		return shiftedString;
	}



	// Great solutions of others
	function myjinxin2015(s) {
		var c = "abcdefghijklmnopqrstuvwxyza"
		return s.replace(/./g, x => c[c.indexOf(x) + 1])
	}



	B = Buffer
	jraghon = s => B([...B(s)].map(e => (e - 96) % 26 + 97)) + ""
})
