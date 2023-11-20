function showPrimeNumbers(lowNumber, highNumber) {
    let primeNumbers = [];
    //* From low to high for loop
    for (let i = lowNumber; i <= highNumber; i++) {
        let isPrime = true;
        //* For loop for finding prime numbers for specific i
        for (let j = 2; j <= i / 2; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

let primeNumbers = showPrimeNumbers(3, 100);
console.log(primeNumbers);