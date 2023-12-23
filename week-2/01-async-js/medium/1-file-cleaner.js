const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (err, data) => {
    const text = data.split(" ").filter((string) => string !== "").join(" ");
    
    fs.writeFile("sample.txt", text, (err) => {
        console.log(err);
    });
})