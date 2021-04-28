let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let stockSchema = Schema({
  idStock: { type: Schema.ObjectId, ref: "categoria" },
  cantidad: Number,
});

// Se exporta el modulo
module.exports = mongoose.model("stock", stockSchema);