const getLugarLatLng = require('./src/lugar');
const getClima = require('./src/clima');
const log = require('./src/log');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Nombre de la localidad y provicia',
    demand: true
  }
}).argv;


/**
 * Invoco a los servicios para obtener los datos del clima.
 */
async function getInfo(direccion) {
  try {
    const coordinates = await getLugarLatLng(direccion);
    const climInfo = await getClima(direccion, coordinates.lat, coordinates.lng);
    log(` \n El Clima en ${coordinates.direccion}.\n Temperatura: ${climInfo.temp}°C\n Presion: ${climInfo.pressure}\n Humedad: ${climInfo.humidity}`);
  } catch (err) {
    return log(null, err);
  }
}

getInfo(argv.direccion);