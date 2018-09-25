/**
 * Manejo los mensajes que se muestran en pantalla.
 */
module.exports = function log(message, err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(message);
}