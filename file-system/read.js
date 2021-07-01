//Metodo para poder leer un  archivo "readFile"

fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err);
    } 
    console.log(data.toString());

    });

    console.log('Ultima linea de codigo')