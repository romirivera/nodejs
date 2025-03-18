const fs = require('node:fs');

//ls básico, "." significa el directorio en donde está
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error al leer el directorio: ', err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});

fs.stat;
