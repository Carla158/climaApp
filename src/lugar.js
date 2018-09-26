const axios = require('axios');
const log = require('./log');

/**
 * Obtengo las coordenadas de la ubicación que ingreso el usuario.
 * Mediante la API REST de Google Maps.
 */
module.exports = async function getLugar(direccion, apiKey) {
    try {
        const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}+CA&key=${apiKey}`);
        const location = resp.data.results[0];
        const coors = location.geometry.location;
        return {
            err: null,
            direccion: location.formatted_address,
            lat: coors.lat,
            lng: coors.lng
        };
    } catch (error) {
        // Menejo el error y envio un mensaje personalizado.
        log(null, error);
        return {
            err: `Ocurrieron problemas al intentar obtener las coordenadas de la ciudad ${direccion}.`
        };
    }
}