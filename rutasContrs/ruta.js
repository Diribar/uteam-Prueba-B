"use strict";

// Variables
const router = express.Router();
const contrVista = require("./contrVista");
const contrAPI = require("./contrAPI");

// Rutas - API - Listado de personas
router.get("/api/elimina-persona", contrAPI.eliminaPersona);
router.get("/api/edita-persona", contrAPI.editaPersona);
router.get("/api/agrega-persona", contrAPI.agregaPersona);

// Rutas - API - Películas por persona
router.get("/api/busca-persona-por-id", contrAPI.buscaPersonaPorId);
router.get("/api/busca-persona-por-nombre", contrAPI.buscaPersonaPorNombre);
router.get("/api/elimina-pelicula", contrAPI.eliminaPeli);
router.get("/api/edita-pelicula", contrAPI.editaPeli);
router.get("/api/agrega-pelicula", contrAPI.agregaPeli);

// Rutas - Vista
router.get("/listado-de-personas", contrVista.listadoDePersonas);
router.get("/muestra-peliculas-de-personas", contrVista.mostrarPelisDePersona);

// Fin
module.exports = router;
