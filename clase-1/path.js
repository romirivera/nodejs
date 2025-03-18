const path = require('node:path');
//construir nuevas rutas de archivos

//-> unix /
// -> windows \
console.log(path.sep); //muestra barras separadoras de carpetas en el sistema operativo

//unir rutas con path.join
const filePath = path.join('/content', 'subfolder', 'test.txt'); // es distinto segun so
console.log(filePath); //`/content/subfolder/test.txt`

const base = path.basename('/tmp/midu-secret-files/password.txt'); //entrega el nombre del fichero y extension
console.log(base); //password.txt

const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt');
console.log(filename); //password

const extension = path.extname('image.jpg'); //muy usado
console.log(extension); //.jpg
