const fs = require('node:fs/promises');
//una promesa es unas forma de hacer código asincrono de forma más legible, sin callbacks
console.log('Leyendo archivo...');
fs.readFileSync('./archivo.txt', 'utf-8').then((text) => {
  console.log(text);
});
console.log('hacer cosas mientras se lee el archivo');
console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8').then((text) => {
  console.log(text);
});
console.log('hacer cosas mienras se lee el archivo');
