/**
 * Manejo los mensajes de salida.
 */
module.exports = function log(message, err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(message);
}