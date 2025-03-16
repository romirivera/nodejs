const express = require('express');
const app = express();
const port = 4000;
const papayasrouter = express.Router();

const ninfas = ['papaya', 'manguito'];

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'tutrituri' }); //enviar en json a traves del endpoint creado en una api
});

papayasrouter.get('/papayas', (req, res) => {
  res.json({ papayas: ninfas });
});

papayasrouter.post('/papayas', (req, res) => {
  const newNinfa = req.body.nombre;
  console.log(newNinfa);
  ninfas.push(newNinfa);
  res.json({ mensaje: 'papaya creada' });
});

papayasrouter.delete('/papayas', (req, res) => {
  const deleteNinfa = req.body.nombre;
  const indiceNinfaBorrada = ninfas.indexOf(deleteNinfa);
  ninfas.splice(indiceNinfaBorrada, 1);
  res.json({ mensaje: 'papaya eliminada' });
});
app.use(papayasrouter);
app.listen(port, () => {
  console.log('servidor escuchando en el puerto 4000');
});
