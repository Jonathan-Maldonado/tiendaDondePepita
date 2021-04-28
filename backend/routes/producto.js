let expres = require("express");
let Producto = require("../controllers/producto");
let producto = require("../modelo/producto");

// creamos la api para controlar las rutas
let api = expres.Router();

// rutas de la API
api.post("/producto/registratProducto", Producto.registrarProducto);
// :nombre? indica que es un parametro que puede o no ir en la url
api.get("/producto/:nombre?", Producto.listaProducto);
api.post("/producto/:nombre?", Producto.listaProducto);
api.put("/producto/editarProducto/:id", Producto.editarProducto);
api.delete("/producto/eliminarProducto/:id", Producto.eliminarProducto);

// exportamos el modulo
module.exports = api;
