(() => {
	// My solution
	function shapeArea(n: number): number {
		let accumulatedArea = 1;

		for (let i = 1; i <= n; i++) {
			accumulatedArea += (4 * (i - 1));
		}

		return accumulatedArea;
	}


	// Great solutions of others
	const elton47 = (n) => n > 0 ? Math.pow(n, 2) + Math.pow(n - 1, 2) : 0;


	function michael_g161(n: number): number {
		return Math.pow(n, 2) + Math.pow(n - 1, 2);
	}


	function evgeniyp(n: number): number {
		return n * n + (n - 1) * (n - 1);
	}


	// My new solution based on answers from others
	const solution = (n: number) => n > 0 ? n ** 2 + (n-1) ** 2 : 0;

})
