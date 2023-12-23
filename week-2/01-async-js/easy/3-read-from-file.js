const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (error, data) => {
    console.log(data);
});

// for (let index = 0; index < 100000; index++) { }
// console.log("for loop completed now!");

for (let index = 0; index < 100000000; index++) { }
console.log("for loop completed now!");