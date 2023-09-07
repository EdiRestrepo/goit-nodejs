const fs = require("fs").promises;

const authenticateUser = (readlineInterface, game) => {
  readlineInterface.question("Escribe tu email: ".yellow, (email) => {
    readlineInterface.question("Escribe tu contraseña ".yellow, (password) => {
      fs.readFile("./db/users.json").then((data) => {
        const users = JSON.parse(data.toString());
        if (users[email] && users[email] === password) {
          console.log("Autenticacion correcta. ");
          game(email);
        //   return email;
        } else {
          console.log("Revisa tus credenciales e inténtalo de nuevo. ");
          readlineInterface.close();
          return;
        }
      });
    });
  });
};

module.exports = {
    authenticateUser,
}
