(() => {
// My solution
	function solution(inputString: string): boolean {
		let sortedArray = inputString.split('').sort();
		let currentCharCount = 0;
		let charTimesArray: number[] = [];
		
		for (let i = 0; i < sortedArray.length; i++) {
			currentCharCount++;
			if (sortedArray[i] !== sortedArray[i+1]) {
				charTimesArray.push(currentCharCount);
				currentCharCount = 0;
			}
		}

		let sortedCharTimesArray = [...charTimesArray].sort((a, b) => b-a);

		if (sortedArray.at(-1) !== getChar(charTimesArray.length)) {
			return false;
		} else if (charTimesArray.join() !== sortedCharTimesArray.join()) {
			return false;
		}
		return true;
	}

	function getChar(position: number) {
		let char = 'a';

		switch (position) {
			case 1:
				char = 'a';
				break;
			case 2:
				char = 'b';
				break;
			case 3:
				char = 'c';
				break;
			case 4:
				char = 'd';
				break;
			case 5:
				char = 'e';
				break;
			case 6:
				char = 'f';
				break;
			case 7:
				char = 'g';
				break;
			case 8:
				char = 'h';
				break;
			case 9:
				char = 'i';
				break;
			case 10:
				char = 'j';
				break;
			case 11:
				char = 'k';
				break;
			case 12:
				char = 'l';
				break;
			case 13:
				char = 'm';
				break;
			case 14:
				char = 'n';
				break;
			case 15:
				char = 'o';
				break;
			case 16:
				char = 'p';
				break;
			case 17:
				char = 'q';
				break;
			case 18:
				char = 'r';
				break;
			case 19:
				char = 's';
				break;
			case 20:
				char = 't';
				break;
			case 21:
				char = 'u';
				break;
			case 22:
				char = 'v';
				break;
			case 23:
				char = 'w';
				break;
			case 24:
				char = 'x';
				break;
			case 25:
				char = 'y';
				break;
			case 26:
				char = 'z';
				break;
		}
		return char;
	}

	// Great solutions of others
	function daniel_b_sxg(inputString: string): boolean {
    let letters: number[] = [];
    for (let i: number = 0; i < 26; i++)
    {
        letters[i] = 0;
    }
    for (let i: number = 0; i < inputString.length; i++)
    {
        letters[inputString.charCodeAt(i) - 97]++;
    }
    for (let i: number = 1; i < letters.length; i++)
    {
        if (letters[i-1] < letters[i])
        {
            return false;
        }
    }
    return true;
}

	
	solution('bbc');
})
