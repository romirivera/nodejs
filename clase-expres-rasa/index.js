const express = require('express');
const app = express();
const port = 4000;
const papayasrouter = require('./papayasrouter');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'tutrituri' }); //enviar en json a traves del endpoint creado en una api
});

app.use(papayasrouter);
app.listen(port, () => {
  console.log('servidor escuchando en el puerto 4000');
});
