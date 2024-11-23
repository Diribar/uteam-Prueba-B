"use strict";
const funciones = require("../funciones.js");

module.exports = {
	listadoDePersonas: (req, res) => {
		// Obtiene información del archivo 'json'
		const info = funciones.leerJson("personas");
		const personas = info.map((n) => ({
			id: n.id,
			nombre: n["first-name"],
			apellido: n["last-name"],
			fechaCumple: n.birthdate,
			tieneSeguro: n["has-insurance"],
		}));
		personas.sort((a, b) => (a.nombre < b.nombre ? -1 : 1)).sort((a, b) => (a.apellido < b.apellido ? -1 : 1));
		return res.render("listadoPersonas", {personas});
	},
	pelisPorPersona: (req, res) => {
		return res.send("pelisPorPersona");
	},
};
