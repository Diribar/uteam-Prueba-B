"use strict";

// Variables
const router = express.Router();
const contrVista = require("./contrVista");
const contrAPI = require("./contrAPI");

// Rutas - API - Listado de personas
router.get("/api/elimina-persona", contrAPI.eliminaPersona);
router.get("/api/elimina-persona", contrAPI.editaPersona);
router.get("/api/elimina-persona", contrAPI.agregaPersona);

// Rutas - API - Películas por persona
router.get("/api/elimina-persona", contrAPI.buscaPersonaPorId);
router.get("/api/elimina-persona", contrAPI.buscaPersonaPorNombre);
router.get("/api/elimina-persona", contrAPI.eliminaPeli);
router.get("/api/elimina-persona", contrAPI.editaPeli);
router.get("/api/elimina-persona", contrAPI.agregaPeli);

// Rutas - Vista
router.get("/", contrVista.inicio);

// Fin
module.exports = router;
