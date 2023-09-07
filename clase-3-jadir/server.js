const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/hello", function (req, res) {
  res.send('<font color="red">Hello World Class FS06</font>');
});

app.post("/api/saludo", function (req, res) {
  const { name, message } = req.body;

  res.send(
    'Su peticion fue la siguiente: <br><font color="blue">' +
      message +
      "</font>"
  );
});

app.delete("/api/borrar/:cedula", function (req, res) {
  const identificacion = req.params.cedula;

  res.send(
    'Su peticion fue borrar el siguiente documento: <br><font color="red">' +
      identificacion +
      "</font>"
  );
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(3000);
