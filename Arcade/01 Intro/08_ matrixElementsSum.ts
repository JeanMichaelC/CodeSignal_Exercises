(() => {
	// My solution
	function solution(matrix: number[][]): number {
		let hauntedColumns: boolean[] = [];
		let totalRoomsCost = 0;

		for (let i = 0; i < matrix.length; ++i) {
			for (let j = 0; j < matrix[i].length; ++j) {
				let currentRoomPrice = matrix[i][j];
				if (currentRoomPrice === 0) {
					hauntedColumns[j] = true;
				} else if (!hauntedColumns[j]) {
					totalRoomsCost += currentRoomPrice;
				}
			}
		}

		return totalRoomsCost;
	}


	// Great solutions of others 
	function prakhar_s22(matrix: number[][]): number {
		let sum = 0;
		for (let i = 0; i < matrix[0].length; i++) {
			for (let j = 0; j < matrix.length; j++) {
				if (matrix[j][i])
					sum += matrix[j][i];
				else
					break;
			}
		}
		return sum;
	}
})
