var tty = require('tty.js');

var app = tty.createServer({
  shell: 'bash',
  users: {foo: 'bar'},
  port: process.env.PORT
});

app.listen();
