const ditto = require('./pokemon/ditto.json');
const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 1234;

app.disable('x-powered-by');

//midleware, son para traquear la request a la base de datos, revisar si el usuario tiene cookies, etc
// la ruta que se le pone es donde queremos que le afecte. Si ponemos el .use es para todos
//app.use(express.json()) hace lo mismo que el middleware de abajo
app.use((req, res, next) => {
  if (req.method !== 'POST') return next();
  if (req.headers['content-type'] !== 'application/json') return next();
  //solo llegan request que son POST y que tienen el header Content-Type: application/json
  //next(); //siempre ponerlo, pq indica que tiene que continuar a la sig ruta, sino se queda esperando
  let body = '';

  //escuchar el evento data
  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now();
    //mutar la request y meter la info en req.body
    req.body = data;
    next();
  });
});

app.get('/', (req, res) => {
  res.json(ditto);
});
app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body);
});

//.use es que puede ser cualquiera como get, post, etc, es como poner un *
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>');
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
