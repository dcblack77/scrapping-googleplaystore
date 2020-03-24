const express = require("express");
const api = express.Router();

const {
    scrap,
} = require("../controller/scrap.controller");

//Rutas
api.post("/url", scrap);
//api.get("/xls", verifyToken, GetUsers);

module.exports = api;