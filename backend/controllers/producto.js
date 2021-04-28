let Producto = require("../modelo/producto");

const registrarProducto = (req, res) => {
  let params = req.body;
  let producto = new Producto();
  producto.nombre = params.nombre;
  producto.descripcion = params.descripcion;
  producto.precio = params.precio;
  producto.save((err, saveProducto) => {
    if (err) {
      res.status(500).send({ mensaje: "Error al conectar al servidor" });
    } else {
      if (saveProducto) {
        res.status(200).send({ producto: saveProducto });
      } else {
        res.status(401).send({ mensaje: "No se puedo registrar el Producto " });
      }
    }
  });
};

// Buscar
const BuscarProducto = (req, res) => {
  let id = req.params["id"];
  Producto.findById({ _id: id }, (err, datosProducto) => {
    if (err) {
      res.status(500).send({ mensaje: "Error al conectar al servidor" });
    } else {
      if (datosProducto) {
        res.status(200).send({ producto: datosProducto });
      } else {
        res.status(401).send({ mensaje: "La producto no existe " });
      }
    }
  });
};

// Listar
const listaProducto = (req, res) => {
  let nombre = req.params["nombre"];
  Producto.find({ nombre: new RegExp(nombre, "i") }, (err, datosProducto) => {
    if (err) {
      res.status(500).send({ mensaje: "Error al conectar al servidor" });
    } else {
      if (datosProducto) {
        res.status(200).send({ producto: datosProducto });
      } else {
        res.status(401).send({ mensaje: "No hay categorias" });
      }
    }
  });
};

// editar
const editarProducto = (req, res) => {
  let id = req.params["id"];
  let params = req.body;
  Producto.findByIdAndUpdate(
    { _id: id },
    { nombre: params.nombre, descripcion: params.descripcion },
    (err, datosProducto) => {
      if (err) {
        res.status(500).send({ mensaje: "Error al conectar al servidor" });
      } else {
        if (datosProducto) {
          res.status(200).send({ producto: datosProducto });
        } else {
          res.status(401).send({ mensaje: "No se pudo modificar la producto" });
        }
      }
    }
  );
};

// eliminamos
const eliminarProducto = (req, res) => {
  let id = req.params["id"];
  Producto.findByIdAndDelete({ _id: id }, (err, datosProducto) => {
    if (err) {
      res.status(500).send({ mensaje: "Error al conectar al servidor" });
    } else {
      if (datosProducto) {
        res.status(200).send({ producto: datosProducto });
      } else {
        res.status(401).send({ mensaje: "No se pudo eliminar la producto" });
      }
    }
  });
};

module.exports = {
  registrarProducto,
  // buscarProducto,
  listaProducto,
  editarProducto,
  eliminarProducto,
};
