let counter = 0;

const setIntervalFunction = setInterval(() => {
    counter++;
    console.log(counter);
    
    if (counter === 30) {
        clearInterval(setIntervalFunction);
    }
}, 1000);