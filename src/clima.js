const axios = require('axios');

/**
 * Obtengo los datos del clima.
 * Mediante la API REST de Open Weathermap.
 */
async function getClima(direccion, lat, lng) {
  try {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=1807420852ff52c5bd867004d74f398d`)
    const data = resp.data.main;
    return {
        temp: data.temp,
        pressure: data.pressure,
        humidity: data.humidity
    };
  } catch (err) {
      // Menejo el error y envio un mensaje personalizado.
      throw Error(`Hubieron problemas al intentar obtener el clima de la ciudad ${direccion}`);
  }
}

module.exports = getClima;