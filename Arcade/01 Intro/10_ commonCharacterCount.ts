(() => {
	// My solution
	function commonCharacterCount(s1: string, s2: string): number {
		let shorterString: string[];
		let longerString: string[];
		let commonChars = 0;

		if (s1.length <= s2.length) {
			shorterString = s1.split("");
			longerString = s2.split("");
		} else {
			shorterString = s2.split("");
			longerString = s1.split("");
		}

		for (let i = 0; i < shorterString.length; i++) {
			let commonCharIndex = longerString.indexOf(shorterString[i]);
			if (commonCharIndex !== -1) {
				longerString.splice(commonCharIndex, 1);
				commonChars += 1;
			}
		}

		return commonChars;
	}


	// Great solutions of others
	function rana_a6(s1: string, s2: string): number {

    let commonCharNumber =0;
    for (let i of s1) {
        if (s2.includes(i)){
            commonCharNumber++;
            s2= s2.replace(i,'');
        }
    }
    return commonCharNumber;
}


function doc999tor(s1: string, s2: string): number {
	var commonCharacters: string[] = []
	var s1Arr = s1.split('')
	var s2Arr = s2.split('')
	for (var i = 0; i < s1Arr.length; i++) {
			let commonIndex = s2Arr.indexOf(s1[i])
			if (commonIndex !== -1) {
					commonCharacters.push(s1Arr[i])
					s2Arr.splice(commonIndex, 1)
			}
	}
	return commonCharacters.length
}

})
