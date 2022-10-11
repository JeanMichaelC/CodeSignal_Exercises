(() => {
	// My solution
	function isIPv4Address(inputString: string): boolean {
		let ipRegEx = /^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/;

		if (ipRegEx.test(inputString)) {
			return true;
		}
		return false;
	}


	// Great solutions of others
	function myjinxin2015(s) {
		var  r=s.split(".")
		return r.length===4&&r.every(x=>x!=""&&!isNaN(x)&&x>=0&&x<256)
	}
	

	function sofie_(inputString: string): boolean {
		let inputStringAsArray = inputString.split(".")
		if (inputStringAsArray.length != 4) {
			return false
		}
	
		for (let i = 0; i < inputStringAsArray.length; i++) {
			const stringValue = inputStringAsArray[i]
			const intValue = parseInt(stringValue)
			let intValueAsString = intValue.toString()
			if (intValueAsString.length != stringValue.length || !(intValue >= 0 && intValue <= 255)) 
			{
				return false
			}
		}
		return true
	}
})
