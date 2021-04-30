let Producto = require("../modelo/producto");
let fs = require("fs");
let path = require("path");
let moment = require("moment");
// const producto = require("../modelo/producto");

const registrarProducto = (req, res) => {
  let params = req.body;
  let producto = new Producto();
  if (
params.nombre &&
params.descripcion &&
params.precio &&
params.idProducto
    ) {
    // ruta img
    let imagenPath = req.files.imagen.path;
    let nameImg = moment().unix();
    let rutaServer =
      "./uploads/imgtienda/" + nameImg + path.extname(imagenPath).toLowerCase();
    fs.createReadStream(imagenPath).pipe(fs.createWriteStream(rutaServer));
    let dbImg = nameImg + path.extname(imagenPath).toLowerCase();

    producto.nombre = params.nombre;
    producto.descripcion = params.descripcion;
    producto.imagen = dbImg;
    producto.precio = params.precio;
    producto.idProducto = params.idProducto;
    //
    producto.save((err, saveProducto) => {
      if (err) {
        res.status(500).send({ mensaje: "Error al conectar al servidor" });
      } else {
        if (saveProducto) {
          res.status(200).send({ producto: saveProducto });
        } else {
          res
            .status(401)
            .send({ mensaje: "No se puedo registrar el Producto " });
        }
      }
    });
  } else {
    res.status(401).send({ mensaje: "Falto alguno de los campos" });
  }
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

// Consultamos todas las categorias
const listaProducto = (req, res) => {
  // si tenemos filtro nombre lo guardamos
  let nombre = req.params["nombre"];
  // Busqueda de las categorias
  Producto.find({ nombre: new RegExp(nombre, "i") })
    .populate("idProducto")
    .exec((err, datosProducto) => {
      if (err) {
        res.status(500).send({ message: "Error en el servidor" });
      } else {
        if (datosProducto) {
          res.status(200).send({ productos: datosProducto });
        } else {
          res
            .status(403)
            .send({ message: "No hay ningun Producto con ese nombre" });
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
