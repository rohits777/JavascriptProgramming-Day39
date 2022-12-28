const rollDie = () => {
    // Roll a die and find the number between 1 to 6
    return Math.floor(Math.random() * 6) + 1;
  }
  
  const rollDice = () => {
    const results = {};
  
    // Repeat the Die roll and find the result each time
    let roll = rollDie();
    results[roll] = (results[roll] || 0) + 1;
  
    // Store the result in a dictionary
    while (Math.max(...Object.values(results)) < 10) {
      roll = rollDie();
      results[roll] = (results[roll] || 0) + 1;
    }
  
    // Find the number that reached maximum times and the one that was for minimum times
    const maxRoll = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);
    const minRoll = Object.keys(results).reduce((a, b) => results[a] < results[b] ? a : b);
  
    console.log(`Number that appeared the most: ${maxRoll} (${results[maxRoll]} times)`);
    console.log(`Number that appeared the least: ${minRoll} (${results[minRoll]} times)`);
  }
  
  rollDice();
  