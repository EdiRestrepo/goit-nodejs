const fs = require('fs').promises;

const logRequest = ({path}) => {
    const timestamp = new Date().toLocaleString();
    fs.appendFile('logs.txt',  `${timestamp} => ${path}\n`)
    // console.log(req.params);
    // console.log(req.path);
}

module.exports = {
    logRequest
}