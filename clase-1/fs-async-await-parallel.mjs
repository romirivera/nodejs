//asíncrono en paralelo
import { readFile } from 'node:fs/promises';

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8'),
]).then(([text, text2]) => {
  console.log(text);
  console.log(text2);
});

//más rápido, se hacen 2 trabajos en paralelos
