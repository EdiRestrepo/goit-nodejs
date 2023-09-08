const express = require('express');
const router = require('./router');
const app = express();

app.use('/api', router);

app.get('/health', (req, res)=>{
    res.send("OK")
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})