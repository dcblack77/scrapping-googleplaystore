//const mailer = require("nodemailer");
process.env.PORT = process.env.PORT || 3000;

//ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || "NODE_ENVIROMENT";

//VENCIMIENTO TOKEN
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//SEED DE AUTENTIFICACION
process.env.SEED = process.env.SEED || "SEED_ENVIROMENT";

//BASE DE DATOS
let db;
if (process.env.NODE_ENV === "NODE_ENVIROMENT") {
    db = "URI_DB_CONNECTION";
} else {
    db = process.env.MYSQL_URI;
}
process.env.urlDB = db;

module.exports = {
    port: process.env.PORT
};