const fib = (n) => {
	const series = []
	series[0] = 0
	series[1] = 1

	for (i = 2; i <= n; i++) {
		series[i] = series[i - 2] + series[i - 1]
	}

	const seriesStr = series.toString()
	const regex = /(\D)/gm

	return seriesStr.replace(regex, ` `)
}

console.log(fib(20))
