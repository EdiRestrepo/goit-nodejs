const readline = require("readline");
const fs = require("fs").promises;
const { program } = require("commander");
require("colors");
const { authenticateUser } = require("./authentication.js");

program.option(
  "-f, --file [type]",
  "file for saving game results",
  "results.txt"
);
program.parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
// let authUser;
const logFile = program.opts().file;
const target = Math.ceil(Math.random() * 10);

console.log("***** ADIVINA EL NÚMERO *****".green);
const game = (authUser) => {
  rl.question("Escribe un número del 1 al 10. ".yellow, (input) => {
    //   console.log(`Escribiste ${userNumber} y el número a adivinar era ${target}`);
    const userNumber = Number(input);
    count += 1;
    if (userNumber === target) {
      console.log(
        `Felicidades, Adivinaste en ${count} intento${count > 1 && "s"}`.green
      );
      fs.appendFile(
          // "results.txt",
          logFile,
    `\n${new Date().toLocaleString()}: || ${authUser} - ${count}\n`
      ).then(() => {
        rl.close();
        return;
      });
    } else {
        console.log("No adivinaste. Intentalo de nuevo".red);
        game(authUser);
    }

  });
};


authenticateUser(rl, game);


