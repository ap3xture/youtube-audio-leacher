const express = require('express');
const server = express();
const mp3 = require('./mp3.js');
const cleanUp = require('./cleanUp.js');
const responseTime = require('response-time');

server.use('/mp3', mp3)
server.use(responseTime())

server.get('/', (x, y) => {
  y.sendFile(__dirname + '/index.html');
})

server.get('/ping', (x, y) => {
y.send("ONLINE, CHECK THE HEADERS FOR SERVER LATENCY.")
})

setInterval(cleanUp, 2700000);

server.listen(process.env.PORT, () => {
  console.log('SERVER STARTED');
});