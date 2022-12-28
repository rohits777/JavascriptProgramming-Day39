// step 1: generate 10 random 3-digit numbers
let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 900) + 100);
}

// step 2: store the random numbers in an array
let array = [];
array.push(...numbers);
console.log(array);

// step 3: find the 2nd largest and 2nd smallest element
let min = Math.min(...array);
let max = Math.max(...array);

// remove the minimum and maximum values
let minIndex = array.indexOf(min);
array.splice(minIndex, 2);
let maxIndex = array.indexOf(max);
array.splice(maxIndex, 2);

// find the new minimum and maximum values
let secondMin = Math.min(...array);
let secondMax = Math.max(...array);


console.log("2nd smallest:", secondMin);
console.log("2nd largest:", secondMax);
