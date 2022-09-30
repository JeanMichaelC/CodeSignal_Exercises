(() => {
	// My first solution: again I got the exercise wrong. I needed to organize it better. 
	function firstTry(a: number[]): number[] {
		let group: number[][] = [];
		let wasTree = a[0] === -1;
		let treesOrPeople: number[] = [];

		a.forEach((element, index, array) => {
			let isTree = element === -1;
			let lastElement = index === array.length - 1;

			if (lastElement) {
				if ((wasTree && isTree) || (!wasTree && !isTree)) {
					treesOrPeople.push(element);
					group.push(treesOrPeople);
				} else if ((!wasTree && isTree) || (wasTree && !isTree)) {
					group.push([element]);
				}
			} else if ((wasTree && isTree) || (!wasTree && !isTree)) {
				treesOrPeople.push(element);
			} else if ((!wasTree && isTree) || (wasTree && !isTree)) {
				group.push(treesOrPeople);
				treesOrPeople = [];
				treesOrPeople.push(element);
				wasTree = !wasTree;
			}
		});

		let sortedGroup = group.map((element) => element.sort((a, b) => a - b));
		let linkedSortedGroup = sortedGroup.flat();

		return linkedSortedGroup;
	}


	// My solution
	function sortByHeight(a: number[]): number[] {
		let onlyPeople = a.filter((element) => element !== -1);
		let sortedPeople = onlyPeople.sort((a, b) => a - b);
		let sortedPeopleAndTrees = a.map((element) => element === -1 ? element : sortedPeople.shift()!);

		return sortedPeopleAndTrees;
	}


	// Great solutions of others
	function eerivera(a: number[]): number[] {
		const newA = a.slice();
		const sortedValues = newA.filter(i => i !== -1).sort((a, b) => a - b);
		let nextValIndex = 0;
		for (let i = 0; i < newA.length; i++) {
			if (newA[i] !== -1) {
				newA[i] = sortedValues[nextValIndex++];
			}
		}
		return newA;
	}
})
