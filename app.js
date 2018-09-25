const lugar = require('./src/lugar');
const clima = require('./src/clima');
const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

/**
 * Invoco a los servicios para obtener los datos del clima
 */
async function getInfo (direccion) {
    const coordinates = await lugar.getLugarLatLng(direccion);
    const climInfo = await clima.getClima(direccion, coordinates.lat, coordinates.lng);
    return ` \n El Clima en ${coordinates.direccion}.\n Temperatura: ${climInfo.temp} °C\n Presion: ${climInfo.pressure}\n Humedad: ${climInfo.humidity}`;
}

getInfo(argv.direccion)
.then((m)=> console.log(m))
.catch((e)=> console.log(e.message));
