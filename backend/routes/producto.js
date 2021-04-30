let expres = require("express");
let Producto = require("../controllers/producto");
let multipart = require("connect-multiparty");
let producto = require("../modelo/producto");
let api = expres.Router();
let path = multipart({ cargas: "./uploads/imgtienda" });

api.post("/producto/registrarProducto", path, Producto.registrarProducto);
api.get("/producto/:nombre?", Producto.listaProducto);
api.post("/producto/:nombre?", Producto.listaProducto);
api.put("/producto/editarProducto/:id", Producto.editarProducto);
api.delete("/producto/eliminarProducto/:id", Producto.eliminarProducto);

module.exports = api;
