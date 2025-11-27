const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter countdown time in seconds: ", (input) => {
  let timeLeft = Number(input);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid number greater than 0.");
    rl.close();
    return;
  }

  console.log(`Countdown starting from ${timeLeft} seconds...`);
  console.log(`Press 's' anytime to stop.`);

  const intervalId = setInterval(() => {
    console.log(`Time left: ${timeLeft}s`);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(intervalId);
      console.log("⏳ Countdown Complete!");
      rl.close();
    }
  }, 1000);

  function checkStopKey() {
    setTimeout(() => {
      rl.input.once("data", (key) => {
        if (key.toString().trim().toLowerCase() === "s") {
          clearInterval(intervalId);
          console.log("⛔ Countdown Stopped by User.");
          rl.close();
        } else {
          checkStopKey(); 
        }
      });
    }, 100); 
  }

  checkStopKey();
});

