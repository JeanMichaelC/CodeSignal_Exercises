(() => {
	// My solution
	function adjacentElementsProduct(inputArray: number[]): number {
		let currentProduct: number;
		let productToReturn = inputArray[0] * inputArray[1];

		for (let i = 1; i < inputArray.length - 1; i++) {
			currentProduct = inputArray[i] * inputArray[i + 1];

			if (productToReturn < currentProduct) {
				productToReturn = currentProduct;
			}
		}

		return productToReturn;
	}

	// Great solutions of others
	function david_n83(inputArray: number[]): number {
		let product: number = Number.MIN_SAFE_INTEGER;
		for (let i = 0; i < inputArray.length - 1; i++) {
			product = Math.max(product, inputArray[i] * inputArray[i + 1]);
		}

		return product;
	}


	function nootagroot(inputArray: number[]): number {
		let _numbers: number[] = [];
		for (let i: number = 0; i < inputArray.length - 1; i++) {
			_numbers.push(inputArray[i] * (inputArray[i + 1]));
		}
		return Math.max(..._numbers);
	}
}) 
