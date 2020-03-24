const express = require("express");
const api = express.Router();

const {
    app,
} = require("../controller/scrap.controller");

//Rutas
api.post("/url", app);
//api.get("/xls", verifyToken, GetUsers);

module.exports = api;