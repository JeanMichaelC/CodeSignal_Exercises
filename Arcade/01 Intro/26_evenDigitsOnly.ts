(() => {
	// My solution
	function solution(n: number): boolean {
		let numbers = n.toString().split('');

		for (let i = 0; i < numbers.length; i++) {
			console.log(Number(numbers[i]) % 2);
			if (Number(numbers[i]) % 2 !== 0) {
				return false;
			}
		}
		return true;
	}



	// Great solutions of others
	function jj_m2(n: number): boolean {
		return n.toString().split('').map(i => Number(i)).every(i => i % 2 == 0);
	}

	function toby_t1(n: number): boolean {
		return !(n + '').match(/[13579]/)
	}
})
