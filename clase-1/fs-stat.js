const fs = require('node:fs'); //desde 2016 se agreg el prefijo node
//fs = file system
//stats es un objeto que contiene información sobre un archivo o directorio.
const stats = fs.statSync('./archivo.txt'); //hay muchos eventos sincronos y asincronos

console.log(
  stats.isFile(), //si es un fichero
  stats.isDirectory(), //si es un directorio
  stats.isSymbolicLink(), //si es un enlace simbolico
  stats.size //tamaño en bytes
);

fs.stat('content'); //si da error es pq el archivo no existe, es una forma de probar la existencia.
