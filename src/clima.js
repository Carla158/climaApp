const axios = require('axios');
const log = require('./log');

/**
 * Obtengo los datos del clima.
 * Mediante la API REST de Open Weathermap.
 */
module.exports = async function getClima(direccion, apiKey, lat, lng) {
  try {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`)
    const data = resp.data.main;
    return {
        temp: data.temp,
        pressure: data.pressure,
        humidity: data.humidity
    };
  } catch (err) {
      // Menejo el error y envio un mensaje personalizado.
      log(err);
      throw Error(`Ocurrieron problemas al intentar obtener el clima de la ciudad ${direccion}.`);
  }
}
