"use strict";

// Variables
const router = express.Router();
const contrVista = require("./contrVista");
const contrAPI = require("./contrAPI");

// Rutas - API - Listado de personas
router.get("/api/edita-persona", contrAPI.editaPersona);
router.get("/api/elimina-persona", contrAPI.eliminaPersona);
router.get("/api/agrega-persona", contrAPI.agregaPersona);
router.get("/api/buscador-personas", contrAPI.buscadorPersonas);

// Rutas - API - Películas por persona
router.get("/api/elimina-relacion-persona-pelicula", contrAPI.eliminaPersPeli);
router.get("/api/agrega-relacion-persona-pelicula", contrAPI.agregaPersPeli);

// Rutas - Vista
router.get("/", contrVista.inicio);
router.get("/listado-de-personas", contrVista.listadoDePersonas);
router.get("/peliculas-por-persona", contrVista.pelisPorPersona);

// Fin
module.exports = router;
