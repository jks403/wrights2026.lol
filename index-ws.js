//const express = require('express');
//const server = require('http').createServer();
//const app = express();
//const fs = require('fs');

  //app.get('/', function(req, res) {
    //res.sendFile('index.html', {root: __dirname    });
   

  //});

  const http = require('http');
  
  const fs = require('fs');
  
  const server = http.createServer(function (req, res) {
  
    res.writeHead(200, { 'content-type' : 'text/html'});
    
    fs.createReadStream('index.html').pipe(res);   
    
    
    //res.sendFile('index.html', {root: __dirname    });
   
   // server.on('request', app);
  // server.listen(3000, function() { console.log('server started on port 3000');
    
});

  

/** Begin Web Sockets  */

const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({server:server});// the server we created up above Could we have used a different name?

wss.on('connection', function connection(ws) {
  
    const numClients = wss.clients.size;
    console.log('Clients connected', numClients);

    wss.broadcast(`Current visitors: ${numClients}`);

    if( ws.readyState === ws.OPEN) {
        ws.send('Welcome to Wrights2026 LOL Family Reunion');
    }

    ws.on('close', function close() {

        wss.broadcast(`Current visitors: ${numClients}`);

        console.log('A client has disconnected');
    })


});

wss.broadcast = function broadcast(data) {

    wss.clients.forEach(function each(client) {
        client.send(data);
    });
}


   server.listen(3000, function() { console.log('server started on port 3000');
    


  });