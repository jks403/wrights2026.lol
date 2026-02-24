
const http = require('http');

const fs = require('fs');

const server = http.createServer(function (req, res) {

	res.writeHead(200, { 'content-type' : 'text/html'});
	fs.createReadStream('index.html').pipe(res);
	


}).listen(3000);

console.log("Server started on port 3000");


