let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let productoSchema = Schema({
  nombre: String,
  descripcion: String,
  imagen: String,
  precio: Number,
  idProducto: { type: Schema.ObjectId, ref: "categoria" },
});

module.exports = mongoose.model("producto", productoSchema);
