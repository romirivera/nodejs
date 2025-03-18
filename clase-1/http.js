const http = require('node:http');
const { findAvailablePort } = require('./free-port');

const desiredPort = process.env.PORT ?? 3000; //Si existe la variable de entorno PORT, se usará ese valor.
const server = http.createServer((req, res) => {
  console.log('request received');
  res.end('Hola mundo');
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});
