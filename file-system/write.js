const fs = require('fs');

//Metodo para poder crear un nuevo archivo "writeFile"
fs.writeFile('./texto.txt', 'Linea numero 1', function (err) {
    if (err) {
        console.log(err);
    } 
    console.log('Archivo creado exitosamente')

    });

    console.log('Ultima linea de codigo');

