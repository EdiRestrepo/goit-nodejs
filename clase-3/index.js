const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next)=>{
    console.log('Middlewaring!')
    next();
})

app.get('/', (req, res)=>{
    res.send('<h1>Hello Goit!</h1>')
})

app.get('/contats/:id', (req, res)=>{

})
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});