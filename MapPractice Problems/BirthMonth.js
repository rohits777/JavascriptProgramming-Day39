const birthMonths = [];

// Generate the birth months of 50 individuals
for (let i = 0; i < 50; i++) {
  const year = Math.random() < 0.5 ? 1992 : 1993; // Randomly assign a year between 92 and 93
  const month = Math.floor(Math.random() * 12) + 1; // Randomly assign a month between 1 and 12
  birthMonths.push(`${month}/${year}`);
}

// Find all the individuals with birthdays in the same month
const birthMonthCounts = {};
for (const birthMonth of birthMonths) {
  const month = birthMonth.split('/')[0];
  if (month in birthMonthCounts) {
    birthMonthCounts[month]++;
  } else {
    birthMonthCounts[month] = 1;
  }
}

// Print the individuals with birthdays in the same month
for (const month in birthMonthCounts) {
  console.log(`There are ${birthMonthCounts[month]} individuals with birthdays in ${month}.`);
}
