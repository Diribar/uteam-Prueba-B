"use strict";

// Obtiene las variables
// const variables = require("./variables.js");
// for (let metodo in variables) global[metodo] = variables[metodo];

// Servidor
global.express = require("express");
const app = express();
app.listen(80, () => console.log("Servidor funcionando..."));

// Requires
global.fs = require("fs");
global.path = require("path");

// Carpeta de formatos
const carpetaFormatos = path.join(__dirname, "formatos");
app.use("/formatos", express.static(carpetaFormatos));

// Vistas
app.set("view engine", "ejs"); // Terminación de los archivos de vista
app.set("views", ["./vistas"]);

// Ruteador
app.use("/", require("./rutasContrs/ruta"));
