// variable expres
let express = require("express");
// importamos controlador de usuario
let Usuario = require("../controllers/usuario");

// creamos la api
let api = express.Router();

// Servicio POTS (registrar)
api.post("/registrarUsuario", Usuario.registrarUsuario)
// servicio para el login
api.post("/login", Usuario.login);

// Exportamos el modulo
module.exports = api;