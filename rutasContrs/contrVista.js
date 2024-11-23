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
		return res.render("listadoPersonas", {personas});
	},
	pelisPorPersona: (req, res) => {
		return res.send("pelisPorPersona");
	},
};
