// el objeto process es un objeto global que proporciona información y control sobre el proceso actual de ejecución. Son propiedades y métodos.

//argumentos de entrada, recupera argumentos
console.log(process.argv);

//controlar el proceso y su salida
process.exit(0); //(0) todo esta bien, (1) error

//controlar eventos del proceso
procces.on('exit', () => {
  //limpiar los recursos
});

//current working directory nos dice desde qué carpeta estamos ejecutando el proceso
console.log(process.cwd()); ///Users/luischodiman/code/romina-rivera/nodejs/clase-1

//platform
console.log(process.env.NODE_ENV); //process. hay muchas opciones, pero el más usado es esta.
