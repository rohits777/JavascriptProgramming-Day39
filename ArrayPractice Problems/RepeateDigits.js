const repeatedNumbers = [];

for (let i = 0; i <= 100; i++) {
  // Check if the number is repeated
  if (i < 10) {
    // If the number is a single digit, check if it is repeated
    if (i === (i * 2)) {
      repeatedNumbers.push(i);
    }
  } else {
    // If the number is two digits, check if both digits are the same
    const str = i.toString();
    if (str[0] === str[1]) {
      repeatedNumbers.push(i);
    }
  }
}

console.log(repeatedNumbers); // [ 11, 22, 33, 44, 55, 66, 77, 88, 99 ]
