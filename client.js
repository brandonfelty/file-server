const net = require('net');
const fs = require('fs')
const PORT = 54321;
const HOST = 'localhost';

const conn = net.createConnection({
  host: HOST,
  port: PORT
});

conn.on('connect', () => {
  conn.write("Do you know where my file is?")
})


conn.setEncoding('utf-8');