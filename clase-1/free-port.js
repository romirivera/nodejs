//net es más rapido, permite crear servidores y manejar conexiones TCP en Node.js.

const net = require('node:net');

//recibe un número de puerto deseado (desiredPort) y devuelve una promesa, lo que permite trabajar con ella de forma asíncrona.
function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer(); //crea servidor TCP para verificar si el puerto está disponible.

    server.listen(desiredPort, () => {
      const { port } = server.address(); //obtiene el número de puerto real
      server.close(() => {
        resolve(port);
      });
    });
    server.on('error', (err) => {
      if (err.code === 'EADRINUSE') {
        findAvailablePort(0).then((port) => resolve(port)); //so asigna un puerto disponible automáticamente.
      } else {
        reject(err); //rechaza si hay otro error
      }
    });
  });
}
module.exports = { findAvailablePort };
