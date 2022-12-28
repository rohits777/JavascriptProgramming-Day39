function primeFactorization(n) {
    // Array to store the prime factors of n
    const primeFactors = [];
  
    // Loop through all the numbers from 2 to n
    for (let i = 2; i <= n; i++) {
      // While n is divisible by i, add i to the array and divide n by i
      while (n % i == 0) {
        primeFactors.push(i);
        n /= i;
      }
    }
  
    // Return the array of prime factors
    return primeFactors;
  }
  
  // Test the function
  const n = 60;
  const primeFactors = primeFactorization(n);
  console.log(`The prime factorization of ${n} is ${primeFactors.join(', ')}.`);
  