let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// esquema
let productoSchema = Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
});
// Se exporta el modulo
module.exports = mongoose.model("producto", productoSchema);