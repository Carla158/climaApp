/**
 * Manejo los mensajes que se muestran en pantalla.
 * @param {string} message
 * @param {Error} err
 * @returns
 */
module.exports = function log(message, err) {
    if (err) {
        // console.log(err);
        return;
    }
    console.log(message);
}