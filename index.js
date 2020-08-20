var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  console.log('Fine')
});

io.on('connection', (socket) => {
  socket.on('zzz', (msg) => {
    io.emit('zzz', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});