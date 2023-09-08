const express = require('express');
const {logRequest} = require("./logger")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

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

app.get("/queryParams", (req, res)=>{
    res.send(`<h1>QUERY PARAMS</h1><h3>${JSON.stringify(req.query)}</h3>`)
})

app.post('/forms', (req, res)=>{
    res.send(`<h1>Form DATA</h1><h2>${JSON.stringify(req.body)}</h2>`)
});

app.post('/login', (req, res)=>{
    const {name, password} = req.body;
    if(password === 'test'){
        res.send('<h1>SUCCESS</h1>')
    }
    res.send('<h1>FAILED</h1>');
});

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});