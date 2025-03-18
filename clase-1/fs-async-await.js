//asíncrono secuencial

const { readFile } = require('node:fs/promises');

//IIFE - Inmediatly Invoked Function Expression
(async () => {
  //función anónima
  console.log('Leyendo archivo...');
  const text = await readFile('./archivo.txt', 'utf-8');
  console.log(text);

  console.log('hacer cosas mientras se lee el archivo');
  console.log('Leyendo el segundo archivo...');
  const text2 = await readFile('./archivo2.txt', 'utf-8');
  console.log(text);
  console.log('hacer cosas mienras se lee el archivo');
})();
