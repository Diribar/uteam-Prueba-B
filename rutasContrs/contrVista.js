"use strict";
const funciones = require("../funciones.js");

module.exports = {
	listadoDePersonas: (req, res) => {
		// Obtiene información de las personas
		const info = funciones.leerJson("personas");
		const personas = info.map((n) => ({
			id: n.id,
			nombre: n["first-name"],
			apellido: n["last-name"],
			fechaCumple: n.birthdate,
			tieneSeguro: n["has-insurance"],
		}));

		// Las ordena alfabéticamente
		personas.sort((a, b) => (a.nombre < b.nombre ? -1 : 1)).sort((a, b) => (a.apellido < b.apellido ? -1 : 1));

		// Fin
		return res.render("listadoPersonas", {personas});
	},
	pelisPorPersona: (req, res) => {
		// Variables
		const {id} = req.query;

		// Obtiene la información de la persona
		const personas = funciones.leerJson("personas");
		let persona = personas.find((n) => n.id == id);
		persona = {
			id: persona.id,
			nombre: persona["first-name"],
			apellido: persona["last-name"],
		};

		// Obtiene las relaciones persona-película
		let pelisIds = funciones.leerJson("persPelis"); // obtiene el archivo de persPelis
		pelisIds = pelisIds.filter((n) => n.personaId == id).map((n) => n.peliId); // obtiene los id de las películas del usuario

		// Obtiene las películas de la persona
		const todasLasPelis = funciones.leerJson("peliculas"); // obtiene el archivo de películas
		const peliculas = todasLasPelis.filter((n) => pelisIds.includes(n.id)); // obtiene las películas de la persona
		const pelisAgregar = todasLasPelis.filter((n) => !pelisIds.some((m) => m == n.id)); // obtiene las películas que se pueden agregar

		// Fin
		return res.render("pelisPorPersona", {persona, peliculas, pelisAgregar});
	},
};
