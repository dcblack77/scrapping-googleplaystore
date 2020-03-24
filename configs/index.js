//const mailer = require("nodemailer");
process.env.PORT = process.env.PORT || 3000;

//ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//VENCIMIENTO TOKEN
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//SEED DE AUTENTIFICACION
process.env.SEED = process.env.SEED || "developer";

//BASE DE DATOS
let db;
if (process.env.NODE_ENV === "dev") {
    db = "mysql://root:20773651.ddcr@localhost:3306/almav";
} else {
    db = process.env.MYSQL_URI;
}
process.env.urlDB = db;

module.exports = {
    port: process.env.PORT
};