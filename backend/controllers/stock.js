let Stock = require("../modelo/stock");

const registrarStock = (req, res) => {
  let params = req.body;
  let stock = new Stock();

  if (params.cantidad && params.idStock) {
    stock.cantidad = params.cantidad;
    stock.idStock = params.idStock;
    stock.save((err, datosStock) => {
      if (err) {
        res.status(500).send({ mensaje: "Error al conectar al servidor" });
      } else {
        if (datosStock) {
          res.status(200).send({ stock: datosStock });
        } else {
          res.status(401).send({ mensaje: "No se pudo registrar el stock" });
        }
      }
    });
  } else {
    res.status(401).send({ mensaje: "Falto alguno de los campos" });
  }
};

// exportamos
module.exports = {
  registrarStock,
};
