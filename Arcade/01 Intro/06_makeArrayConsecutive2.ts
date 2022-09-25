(() => {
	// My solution
	function makeArrayConsecutive2(statues: number[]): number {
		const compareNumbers = (a, b) => a - b;
		let statuesInOrder = statues.sort(compareNumbers);
		let statuesNeeded = 0;


		for (let i = 0; i < statues.length - 1; i++) {
			let statuesDifference = statuesInOrder[i + 1] - statuesInOrder[i];
			statuesNeeded += statuesDifference - 1;
		}

		return statuesNeeded;
	}


	// Great solutions of others
	function doc999tor(statues: number[]): number {
		var statuesMin = Math.min(...statues)
		var statuesMax = Math.max(...statues)
		return (statuesMax - statuesMin) - statues.length + 1
	}


	function andrii_i1(statues: number[]): number {
		return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
	}


	function hoang_anh_d(statues: number[]): number {
		statues.sort((a, b) => {
			return a - b;
		});


		let count = 0;
		for (let i = statues[0]; i < statues[statues.length - 1]; i++) {
			if (statues.indexOf(i) == -1) {
				count++;
			}

		}
		return count;
	}

})
