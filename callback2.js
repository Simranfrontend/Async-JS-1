
function timer(duration, onComplete) {
    console.log(`Timer started for ${duration} ms...`);

    setTimeout(() => {
       
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}

timer(2000, (message) => {
    console.log(message);
});
