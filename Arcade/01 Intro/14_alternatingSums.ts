(() => {
	// My solution
	function solution(a: number[]): number[] {
		let team1: number[] = [];
		let team2: number[] = [];

		a.forEach((personWeight, index) => {
			let isEven = index % 2 === 0;

			if (isEven) {
				team1.push(personWeight);
			} else {
				team2.push(personWeight);
			}
		})

		let totalWeightTeam1 = team1.reduce((total, personWeight) => total += personWeight, 0);
		let totalWeightTeam2 = team2.reduce((total, personWeight) => total += personWeight, 0);

		return [totalWeightTeam1, totalWeightTeam2];
	}



	// Great solutions of others
	function geekhero(a: number[]): number[] {
		let b = [0, 0]
		a.map((x, i) => b[i % 2] += x);
		return b;
	}


	const baris_b6 = (a: number[]): number[] => [
		a.reduce((total, currentValue, index) => index % 2 === 0 ? total + currentValue : total, 0),
		a.reduce((total, currentValue, index) => index % 2 === 1 ? total + currentValue : total, 0)];



	function nonononono(a: number[]): number[] {
		return a.reduce((acc, el, index) => {

			if (index % 2 == 0)
				return acc = [acc[0] + el, acc[1]]
			else
				return acc = [acc[0], acc[1] + el]

		}, [0, 0])
	}



	// My new solution based on answers from others 
	function myEnhancedSolution(a: number[]): number[] {
		let weightTeam1 = 0; 
		let weightTeam2 = 0; 	

		a.forEach((personWeight, index) => {
			let isEven = index % 2 === 0;

			if (isEven) {
				weightTeam1 += personWeight;
			} else {
				weightTeam2 += personWeight;
			}
		})

		return [weightTeam1, weightTeam2];
	}
})

