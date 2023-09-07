const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log("nuestro middleware");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact</h1> Parámetro: ${req.params.id}`);
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});