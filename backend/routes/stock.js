let expres = require("express");
let Stock = require("../controllers/stock");
let api = expres.Router();

api.post("/stock/registrarStock", Stock.registrarStock);

module.exports = api;