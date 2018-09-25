const getLugarLatLng = require('./src/lugar');
const getClima = require('./src/clima');
const log = require('./src/log');

const argv = require('yargs')
.usage('Usage: $0 <command> [options]')
.command('d', 'Nombre de la localidad y provicia')
.alias('d','direccion')
.example('node $0 -d "concordia entre rios"')
.demandOption(['d']).argv;

/**
 * Envio las consultas a cada servicio, para obtener los datos del clima.
 * Para finalmente, mostrarlos de forma ordenada por pantalla.
 */
async function getInfo(direccion) {
  try {
    const coordinates = await getLugarLatLng(direccion);
    const climInfo = await getClima(direccion, coordinates.lat, coordinates.lng);
    log(` \n El Clima en ${coordinates.direccion}.\n Temperatura: ${climInfo.temp}°C\n Presion: ${climInfo.pressure}\n Humedad: ${climInfo.humidity}`);
  } catch (err) {
    return log(err.message);
  }
}

getInfo(argv.direccion);