function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If the number is divisible by any number from 2 to its square root, it's not prime
    }
  }

  return true; // If the number is not divisible by any number from 2 to its square root, it's prime
}

// Testing the function
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(23)); // Output: true
console.log(isPrime(1)); // Output: false
