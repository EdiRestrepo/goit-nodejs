const fs = require("fs").promises;
// console.log(fs);

fs.readFile("./textfile.txt").then((data) => {
    console.log(data);
    console.log(data.toString());
})

