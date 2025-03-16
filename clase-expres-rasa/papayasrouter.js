const express = require('express');

const papayasrouter = express.Router();

const ninfas = ['papaya', 'manguito'];

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

module.exports = papayasrouter;
