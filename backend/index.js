let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let port = process.env.PORT || 3001;
let app = express();

// ruta
let Usuario = require("./routes/usuario");
const { registrarUsuario } = require("./controllers/usuario");
let Producto = require("./routes/producto");
let Stock = require("./routes/stock");

// coneccion
mongoose.connect(
  "mongodb://localhost:27017/tiendaDondePepitadb",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("servidor BD: ACTIVO");
      app.listen(port, function () {
        console.log("servidor Backend funcionando en el puerto :" + port);
      });
    }
  }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", Usuario);
app.use("/api", Producto);
app.use("/api", Stock);

module.exports = app;