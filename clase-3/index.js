const express = require('express');
const {logRequest} = require("./logger")
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    logRequest(req);
    console.log('Middlewaring!')
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>Hello Goit!</h1>')
});

app.get("/contacts", (req, res) => {
  const { id } = req.params;
  console.log(req.params.id);
  res.send(`<h1>Contacts</h1>`);
});

app.get('/contacts/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params.id);
    res.send(`<h1>Contacts</h1><h2>Contact id: ${id}</h2>`)
});


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});