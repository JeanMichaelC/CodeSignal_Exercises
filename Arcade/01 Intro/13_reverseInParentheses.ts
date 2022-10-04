(() => {
	// My solution
	function reverseInParentheses(inputString: string): string {
		let charsArr = inputString.split('');
		let newArray: string[] = [];
		let i = 0;

		while (i < inputString.length) {
			if (charsArr[i] === '(') {
				newArray.push(...reverse()!);
			} else {
				newArray.push(charsArr[i]);
			}
			i++;
		}
		return newArray.join('');


		function reverse() {
			let arrayToReturn: string[] = []
			i++;
			while (i < inputString.length) {
				if (charsArr[i] === '(') {
					arrayToReturn.push(...reverse()!);
					// reverseDeepness += 1;
				} else if (charsArr[i] === ')') {
					arrayToReturn.reverse();
					return arrayToReturn;
				} else {
					arrayToReturn.push(charsArr[i]);
				}
				i++;
			}
		}
	}


	// Great solutions of others
	function wolfgang_k1(o: string): string {
		while (true) {
			const b = o.lastIndexOf("("); if (b < 0) break;
			const e = o.indexOf(")", b); if (e < 0) break;

			o = o.substr(0, b)
				+ o.substring(b + 1, e).split("").reverse().join("")
				+ o.substr(e + 1);
		}
		return o;
	}



	function jakzo(inputString: string): string {
		while (inputString.includes('(')) {
			inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
		}
		return inputString;
	}



	function daniel_z38(s: string): string {
		while (true) {
			let c = s.indexOf(")");

			if (c === -1) {
				break;
			}

			let o = s.substring(0, c).lastIndexOf("(");

			let start = s.substring(0, o);
			let middle = s.substring(o + 1, c).split("").reverse().join("");
			let end = s.substring(c + 1, s.length);

			s = start + middle + end;
		}

		return s;
	}

})
