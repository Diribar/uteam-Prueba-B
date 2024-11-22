"use strict";

// Variables
const router = express.Router();
const contr = require("./controlador");

// Rutas
router.get("/", contr.inicio);

// Fin
module.exports = router;
