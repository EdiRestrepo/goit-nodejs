const fs = require('fs').promises;

const logRequest = (req) => {
    console.log(req);
    // fs.appendFile('logs.txt')
}

module.exports = {
    logRequest
}