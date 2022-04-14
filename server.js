const net = require('net');
const fs = require('fs');
const buffer = require('buffer');

const server = net.createServer((c) => {
  console.log("client connected");
});

const HOST = 'localhost';
const PORT = 54321;


server.listen(PORT, HOST, () => {
  console.log(`server bound to ${PORT} \n`)
  
  server.on('connection', (c) => {
    c.on('data', (data) => {
      console.log('data received');
      console.log('data is: \n', data);
    });
    c.setEncoding('utf8');
  })
    
})

