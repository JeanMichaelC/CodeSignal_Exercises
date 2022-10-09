(() => {
	// My solution
	function solution(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
		let yourStrength = [yourLeft, yourRight].sort((a, b) => a - b);
		let friendsStrength = [friendsLeft, friendsRight].sort((a, b) => a - b);

		if (yourStrength.join('') === friendsStrength.join('')) {
			return true;
		}
		return false
	}



	// Great solutions of others
	function jj_m2(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
		return Math.max(yourLeft, yourRight) == Math.max(friendsLeft, friendsRight)
			&& Math.min(yourLeft, yourRight) == Math.min(friendsLeft, friendsRight);
	}


	function kantor_p(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
		if ((yourLeft === friendsLeft && yourRight === friendsRight) || (yourLeft === friendsRight && yourRight === friendsLeft)) {
			return true;
		}
		return false;
	}
})
