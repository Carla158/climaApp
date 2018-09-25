const axios = require('axios');

/**
 * Obtengo las coordenadas de la ubicación que ingreso el usuario.
 * Mediante la API REST de Google Maps.
 */
async function getLugarLatLng(direccion) {
    const encURI = encodeURI(direccion);
    try {
        const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encURI}+CA&key=AIzaSyAJ2aEs0UpGAW-G4mleFU6nasD6U1RkfT0`);
        const location = resp.data.results[0];
        const coors = location.geometry.location;
        return {
            direccion: location.formatted_address,
            lat: coors.lat,
            lng: coors.lng
        };
    } catch (err) {
        // Menejo el error y envio un mensaje personalizado
        throw Error(`Hubieron problemas al intentar obtener las coordenadas de la ciudad ${direccion}`);
    }
}

module.exports = {
    getLugarLatLng
};