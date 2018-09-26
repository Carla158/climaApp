const axios = require('axios');
const log = require('./log');

/**
 * Obtengo las coordenadas de la ubicación que ingreso el usuario.
 * Mediante la API REST de Google Maps.
 * @param {string} direccion
 * @param {string} apiKey
 * @returns
 */
module.exports = async function obtenerLugar(direccion, apiKey) {
    const ret = {
        err: '',
        direccion: '',
        lat: 0.0,
        lng: 0.0
    };
    try {

        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}+CA&key=${apiKey}`;
        const resp = await axios.get(url);
        const data = resp.data.results[0];
        const coord = data.geometry.location;

        ret.direccion = data.formatted_address;
        ret.lat = coord.lat;
        ret.lng = coord.lng;
        return ret;

    } catch (error) {
        // Menejo el error y envio un mensaje personalizado.
        log(null, error);
        ret.err = `Ocurrieron problemas al intentar obtener las coordenadas de la ciudad ${direccion}.`;
        return ret;
    }
}