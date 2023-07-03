//Prime Number
const isPrimeNum = (number) => {
    let isPrime = true;

    // check if number is equal to 1
    if (number === 1)
    {
        console.log("1 is neither prime nor composite number.");
    }//if 
    else if (number > 1)
    {
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0)
            {
                isPrime = false;
                break;
            }
        }//for
        
        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }//else-if
    else
    {
        console.log("The number is not a prime number.");
    }//else
}//isPrimeNum

// Let's test it with some examples
console.log(isPrimeNum(2)); //2 is a prime number
console.log(isPrimeNum(5)); //5 is a prime number
console.log(isPrimeNum(12)); //12 is a not prime number
console.log(isPrimeNum(17)); //17 is a prime number
console.log(isPrimeNum(21)); //21 is a not prime number
