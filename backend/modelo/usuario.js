let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let usuarioSchema = Schema({
  nombres: String,
  apellidos: String,
  edad: Number,
  rol: String,
});

module.exports = mongoose.model("usuario", usuarioSchema);