// Generate 10 random 3-digit numbers
var numbers = [];
for (var i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 900) + 100);
}

// Sort the array in ascending order
numbers.sort(function(a, b) {
  return a - b;
});

// Find the 2nd largest and 2nd smallest elements
var secondLargest = numbers[numbers.length - 2];
var secondSmallest = numbers[1];

console.log("2nd largest:", secondLargest);
console.log("2nd smallest:", secondSmallest);
