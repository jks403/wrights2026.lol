const http = require('http');

const fs = require('fs');

const server = http.createServer(function (req, res) {

        res.writeHead(200, { 'content-type' : 'text/html'});
        fs.createReadStream('index2.html').pipe(res);



}).listen(3300);

console.log("Server started on port 3300");
