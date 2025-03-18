const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors'); //dependencia de produccion

//Obtiene el directorio a listar desde los argumentos de la línea de comandos, pedir archivo específico dando posición
const folder = process.argv[2] ?? '.';

async function ls(folder) {
  //función asíncrona que recibe el directorio folder como parámetro
  let files;
  try {
    files = await fs.readdir(folder); // asincrónico secuencial,  readdir=leer conternido
  } catch {
    console.error(pc.red(`No se puede leer el directorio ${folder}`));
    process.exit(1);
  }
  const filesPromises = files.map(async (file) => {
    //en paralelo
    const filePath = path.join(folder, file);
    let stats;

    try {
      stats = await fs.stat(filePath); //info del archivo
    } catch {
      console.log(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }
    const isDirectory = stats.isDirectory(); //true-false
    const fileType = isDirectory ? 'd' : 'f';
    const fileSize = stats.size; //en bytes, si corresponde a un directorio será 0.
    const fileModified = stats.mtime.toLocaleString(); //mtime Obtiene la fecha de la última modificación del archivo, lo transforma en formato legible con .toLocaleString().

    return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(
      fileSize.toString().padStart(10)
    )} ${pc.yellow(fileModified)}`;
  });
  const filesInfo = await Promise.all(filesPromises); //obtiene toda la información sobre los archivos) y las almacena
  filesInfo.forEach((fileInfo) => console.log(fileInfo)); //Imprime la información de cada archivo/directorio en la consola.
}
ls(folder);

//.padEnd(20) asegura que el nombre del archivo ocupe al menos 20 caracteres en la línea. Si el nombre del archivo es más corto, se rellena con espacios al final para que todos los nombres de archivo tengan la misma longitud y la salida quede alineada de forma ordenada.
