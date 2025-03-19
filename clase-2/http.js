const http = require('node:http');
const fs = require('node:fs');
//callback es una función que se ejecuta después de que pase algo
const desiredPort = process.env.PORT ?? 1234;
const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html', 'charset=utf-8');
  if (req.url === '/') {
    res.end('<h1>Bienvenido</h1>');
  } else if (req.url === '/imagen.png') {
    res.setHeader('Content-Type', 'image/png');

    fs.readFilee('./image.png', (err, data) => {
      //lee datos binarios
      if (err) {
        res.statusCode = 500;
        res.end('<h1>500 Internal Servel Error</h1>');
      } else {
        res.setHeader('Content-Type', 'image/png');
        res.end(data);
      }
    });
  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404</h1>');
  }
};
const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`);
});
