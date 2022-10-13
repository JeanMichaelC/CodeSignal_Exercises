(() => {
	// My solution
	function solution(name: string): boolean {
		let hasOnlyEnglishChars = /^([a-zA-Z_]|[a-zA-Z_][a-zA-Z0-9_]+)$/.test(name);
		return hasOnlyEnglishChars;
	}


	// Great solutions of others
	function myjinxin2015(name: string): boolean {
		return /^[a-z_]\w*$/i.test(name)
	}
})
