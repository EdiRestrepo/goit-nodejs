const readline = require("readline");
const fs = require("fs/promises");
const rl = readline.createInterface({
  input: process.stdin, // entrada desde el flujo estándar
  output: process.stdout, // salida al flujo estándar
});


rl.question("¿Cómo te llamas?", (answer) => {
    //   console.log(`Un placer conocerte ${answer}`);
    console.log(`Procesando tu respuesta`);
    rl.pause();
    fs.writeFile("results.txt", answer).then(() => {
        console.log("Tu archivo ya esta listo");
        rl.close();
    })
});