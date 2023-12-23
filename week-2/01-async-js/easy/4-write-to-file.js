const fs = require("fs");

const data = "hello this is a sample text";

fs.writeFile("a.txt", data, (err) => {
    console.log(err);
})