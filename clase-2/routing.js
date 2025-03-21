const http = require('node:http');
const dittoJSON = require('./pokemon/ditto.json');

const processRequest = (req, res) => {
  const { method, url } = req;
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          return res.end(JSON.stringify(dittoJSON));
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.end('<h1>404</h1>');
      }
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = '';

          //escuchar el evento data
          req.on('data', (chunk) => {
            body += chunk.toString(); //de binario a string
          });

          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              //llamar a una base de datos par guardar la info
              res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
              data.timestamp = Date.now();
              res.end(JSON.stringify(data));
            } catch (error) {
              res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
          });

          break;
        }
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          return res.end('404 not found');
      }
  }
};
const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log('server listening on port:1234');
});
