function compressString(str) {
	var chars = str.split("");
	var compressed = '';
	var count = 0;
	chars.forEach((c,i) => {
		count++;
		if (c != chars[i+1]) {
			compressed += c + count;
			count = 0;
		}
	})
	return compressed;
}
