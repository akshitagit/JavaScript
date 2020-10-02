// numbers = [2, 4, 6]
// numbers = [54, 24]
 numbers = [15, 25, 35]

function hcf(num, numbers) {

    let commonFactors = [];
    let highestCommonFactor;

    for (let i = 0; i < num; i++) {

        for (let j = 1; j <= numbers[i]; j++) {

            if (numbers[i] % j === 0) {

                commonFactors.push(j)
            }

        }

    }


    let sortedCommonFactors = commonFactors.sort((a, b) => b - a);


    for (let k = sortedCommonFactors.length; k > 0; k--) {

        if (sortedCommonFactors[k] == sortedCommonFactors[k + (num - 1)]) {

            highestCommonFactor = sortedCommonFactors[k];

        }
    }

    return highestCommonFactor

}




console.log(hcf(3, numbers))