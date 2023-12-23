let time = 0;

const timeFunction = () => {
    time = time + 1;
    console.log(time);

    if (time === 30) return;

    setTimeout(timeFunction, 1000);
}

timeFunction();