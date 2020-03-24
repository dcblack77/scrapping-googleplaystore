//Install express server
require("./configs/index.js");
const express = require("express");
const cors = require("cors");
const app = express();

const bodyParser = require("body-parser");

const api = require("./routes/index.js");

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

app.use(cors());

//Configuración Global de rutas

app.use("/api", api);

async function main() {
    await app.listen(process.env.PORT);
    console.log("Server on port", process.env.PORT);
}

main();