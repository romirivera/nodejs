const fs = require('node:fs');
//const { promisify } = require('node:util'); //promisify es una función que convierte una función de callback en una promesa
// const readFilePromise = promisify(fs.readFile); y despues abajo continuar como si fuera una promesa
console.log('Leyendo archivo...');
const text = fs.readFileSync('./archivo.txt', 'utf-8', (err, text) => {
  console.log(text);
}); // callback se usa para leer archivos de forma asincrona
console.log('hacer cosas mientras se lee el archivo');
//forma asincrona de leer archivos
console.log('Leyendo el segundo archivo...');

const text2 = fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log(text);
}); // se usan callback que se ejecutan cuando se termina de leer el archivo, ejemplo se lee esta linea incluso antes de leer el primero
console.log('hacer cosas mienras se lee el archivo');
