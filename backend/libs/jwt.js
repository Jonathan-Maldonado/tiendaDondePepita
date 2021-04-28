let jwt = require("jwt-simple");
let moment = require ("moment");
let secret = "bit21store";

exports.createToken = function (usuario) {
    let payload = {
        _id: usuario._id,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        edad: usuario.edad,
        iat: moment().unix(),
    }
    return jwt.encode(payload, secret);
}