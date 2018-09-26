const axios = require('axios');
const log = require('./log');

/**
 * Obtengo los datos del clima.
 * Mediante la API REST de Open Weathermap.
 * @param {string} direccion
 * @param {string} apiKey
 * @param {number} lat
 * @param {number} lng
 * @returns
 */
module.exports = async function getClima(direccion, apiKey, lat, lng) {
    const ret = {
        err: '',
        temp: 0.0,
        pressure: 0.0,
        humidity: 0.0
    };
    try {

        const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`)
        const data = resp.data.main;

        ret.temp = data.temp;
        ret.pressure = data.pressure;
        ret.humidity = data.humidity;
        return ret;

    } catch (error) {
        // Menejo el error y envio un mensaje personalizado.
        log(null, error);
        ret.err = `Ocurrieron problemas al intentar obtener el clima de la ciudad ${direccion}.`;
        return ret;
    }
}