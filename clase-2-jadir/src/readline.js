const program = require("readline");

pr = program.createInterface(process.stdin, process.stdout);

pr.question("Cual es su edad?", (edad) => {
    try {
        if (edad > 0) {
        console.log(`La edad que ingresaste es: ${edad}`);
        } else {
            console.log(`La edad ingresada no es valida`);
    }
    } catch (e) {
        console.log(e);
    }
});
