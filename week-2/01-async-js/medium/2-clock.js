const getTime = () => {
    const date = new Date();
    console.log(date.toLocaleTimeString().toUpperCase(), date.toLocaleTimeString("en-IN", { hour12: false }));
}

setInterval(getTime, 1000);