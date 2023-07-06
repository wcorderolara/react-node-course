const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer( (req, res) => {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  res.end('Bienvenidos a Node.js');
})

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en ${hostname}:${port}`);
})

