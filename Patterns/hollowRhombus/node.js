const drawRhombus = require('./hollowRhombus')

const verifyInput = (len, input) => {
    const lim = [0, 16]
    const inLimitedRange = input[0] > lim[0] && input[0] < lim[1]
    const isOdd = input[0] % 2 != 0
    if (len == 1 && inLimitedRange && isOdd)
        return true
    console.log(len != 1 ?
        'This program requires 1 numeric input to excute.' :
        !inLimitedRange ?
            `The numeric input must be in ${lim[0]} to ${lim[1]} range.` :
            !isOdd ?
                'The input must be odd number' :
                `I've no idea what's going on, so save yourself!`
    )
    return false
}

const main = (argc, argv) => {
    const isInputValid = verifyInput(argc, argv)
    if (isInputValid) {
        const size = { width: argv[0], height: argv[0] }
        const block = { hollow: ' ', solid: '*' }
        console.log(
            `Here is ${size.width}x${size.height} diamon shape: \n`,
            drawRhombus(size, block),
            '\n'
        )
        return 0
    }
    console.log('\n')
    return 1
}

const arg = process.argv.slice(2)
main(arg.length, arg)