const express = require('express');

const colors = require('colors');

const server = express();

server.get('/', function(request, response) {
    response.send('<h1>Hola mundo con Express y Nodejs</h1>');
    response.end();
})

server.listen(3000, function () {
    console.log('Server on port 3000'.red);
})