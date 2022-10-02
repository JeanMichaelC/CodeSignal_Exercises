(() => {
	// My solution
	function addBorder(picture: string[]): string[] {
		let pictureWidth = picture[0].length + 2;

		let marginPicture = picture.map((string) => `*${string}*`);
		console.log(marginPicture);
		marginPicture.unshift('*'.repeat(pictureWidth));
		marginPicture.push('*'.repeat(pictureWidth));

		return marginPicture;
	}

	// Great solutions of others
	function nonononono(picture: string[]): string[] {
		const maxLength = picture[0].length;

		return ["*".repeat(maxLength + 2),
					 ...picture.map(el => `*${el}*`),
					 "*".repeat(maxLength + 2)
					 ]
	}

}) 
