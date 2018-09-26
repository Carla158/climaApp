/**
 * Manejo los mensajes que se muestran en pantalla.
 * @param {string} mensaje
 * @param {Error} err
 * @returns
 */
module.exports = function log(mensaje, err) {
    if (err) {
        // console.log(err);
        return;
    }
    console.log(mensaje);
}