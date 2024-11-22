"use strict";

// Variables
const router = express.Router();
const contrVista = require("./contrVista");
const contrAPI = require("./contrAPI");

// Rutas
router.get("/api", contrAPI.inicio);
router.get("/", contrVista.inicio);

// Fin
module.exports = router;
