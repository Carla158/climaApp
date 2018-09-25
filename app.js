const yargs = require('yargs');
const getLugarLatLng = require('./src/lugar');
const getClima = require('./src/clima');
const log = require('./src/log');

const argv = yargs
  .usage('Uso: $0 <comando> [opción]')
  .command('d', 'Nombre de la localidad y provicia')
  .example('node $0 -d "concordia entre rios"')
  .alias('d', 'direccion')
  .demandOption('d').argv;

const API_KEY_GOOGLE_MAP = 'AIzaSyAJ2aEs0UpGAW-G4mleFU6nasD6U1RkfT0';
const API_KEY_OPEN_WEATHERMAP = '1807420852ff52c5bd867004d74f398d';

/**
 * Envio las consultas a cada servicio, para obtener los datos del clima.
 * Para finalmente, mostrarlos de forma ordenada por pantalla.
 */
async function getInfo(direccion, apiKeyGoogle, apiKeyOpenWeat) {

  const coordinates = await getLugarLatLng(direccion, apiKeyGoogle);
  const climInfo = await getClima(direccion, apiKeyOpenWeat, coordinates.lat, coordinates.lng);
  
  if (coordinates.err) {
    log(coordinates.err);
    return;
  }
  
  if (climInfo.err) {
    log(climInfo.err);
    return;
  };

  log(` \n El Clima en ${coordinates.direccion}.\n Temperatura: ${climInfo.temp}°C\n Presion: ${climInfo.pressure}\n Humedad: ${climInfo.humidity}`);
}

getInfo(argv.direccion, API_KEY_GOOGLE_MAP, API_KEY_OPEN_WEATHERMAP);