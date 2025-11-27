let count = 0;

// Repeat message every 1 second
const loadingInterval = setInterval(() => {
  console.log("Loading...");
  count++;
  
  // Stop after 5 seconds (5 repetitions)
  if (count === 5) {
    clearInterval(loadingInterval);
    console.log("Loaded successfully!");
  }
}, 1000);
