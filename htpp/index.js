const http = require('http');

const handleServer = function (request, response) {
    response.writeHead(200, {'content-type' : 'text/html'});
    response.write('<h1>Hola mundo desde Nodejs</h1>');
    response.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function (){
    console.log('Server on port 3000')
});