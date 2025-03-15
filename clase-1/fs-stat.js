const fs = require('node:fs'); //desde 2016 se agreg el prefijo node
//fs = file system
const stats = fs.statSync('./archivo.txt'); //hay uchos eventos sincronos y asincronos

console.log(
  stats.isFile(), //si es un fichero
  stats.isDirectory(), //si es un directorio
  stats.isSymbolicLink(), //si es un enlace simbolico
  stats.size //tamaño en bytes
);
