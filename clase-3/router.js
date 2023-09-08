const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    // res.send("<h1>ROOT</h1>")
    res.redirect('/api/about')
});

router.get("/about", (req, res)=>{
    res.send("<h1>ABOUT</h1>")
});

router.get("/logs", (req, res)=>{
    res.download('./logs.txt')
})

module.exports = router;