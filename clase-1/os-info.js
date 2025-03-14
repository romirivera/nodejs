const os = require('node:os'); //modulos nativos, os da información del sistema operativo
console.log('Información del sistema operativo', os.platform());
console.log('Versión del sistema operativo', os.release());
console.log('Arquitectura del sistema operativo', os.arch());
console.log("CPU's", os.cpus()); // procesadores
console.log('Memoria libre', os.freemem());
console.log('Memoria total', os.totalmem());
console.log('uptime', os.uptime() / 60 / 60); // tiempo de encendido en horas
