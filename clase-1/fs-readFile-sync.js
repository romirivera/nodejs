//síncrono

const fs = require('node:fs');

console.log('Leyendo el primer archivo...');
const text = fs.readFileSync('./archivo.txt', 'utf-8');
console.log(text);

console.log('hacer cosas mientras se lee el archivo');

console.log('Leyendo el segundo archivo...');

const text2 = fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log(text);
});
console.log('hacer cosas mienras se lee el archivo');
console.log(text2);
