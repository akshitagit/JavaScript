//Prime Factorise a Natural Number into its Prime Factors (Issue #54)
//https://github.com/akshitagit/JavaScript/issues/54
//Contributed by @tauseefmohammed2 : https://github.com/tauseefmohammed2

function PrimeFactors (number) {

    //Storing All Prime Factors in the Array : primeFactors
    var primeFactors = []; 

    //Checking Whether 2 is a Factor of Input Number
    while (number % 2 === 0) { 
        primeFactors.push(2);
        number = number / 2;
    }

    //Storing Square Root in Variable : sqrtNumber
    var sqrtNumber = Math.sqrt(number);

    //Finding all Factors Between 3 and sqrtNumber
    for (var i = 3; i <= sqrtNumber; i++) {
        while (number % i === 0) {
            primeFactors.push(i);
            number = number / i;
        }
    }

    //If the Input Number is Still Greater than 2, Then Push the Number itself in the Prime Factors Array
    if (number > 2) {
        primeFactors.push(number);
    }

    //Returning the Array of Prime Factors
    return primeFactors; 
}

console.log(PrimeFactors(50)); //Output : [2,5,5]
console.log(PrimeFactors(17)); //Output : [17]
console.log(PrimeFactors(100)); //Output : [2,2,5,5]
console.log(PrimeFactors(104)); //Output : [2,2,2,13]