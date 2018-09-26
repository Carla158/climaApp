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
module.exports = async function obtenerClima(direccion, apiKey, lat, lng) {
    const ret = {
        err: '',
        temperatura: 0.0,
        presion: 0.0,
        humedad: 0.0
    };
    try {

        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;
        const resp = await axios.get(url);
        const data = resp.data.main;

        ret.temperatura = data.temp;
        ret.presion = data.pressure;
        ret.humedad = data.humidity;
        return ret;

    } catch (error) {
        // Menejo el error y envio un mensaje personalizado.
        log(null, error);
        ret.err = `Ocurrieron problemas al intentar obtener el clima de la ciudad ${direccion}.`;
        return ret;
    }
}