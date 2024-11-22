"use strict";

module.exports = {
	listadoDePersonas: (req, res) => {
		// Obtiene información del archivo 'json'
		const rutaNombre = "../datos.json";
		const json = fs.readFileSync(rutaNombre, "utf8");
		const info =  JSON.parse(json);
	},
	mostrarPelisDePersona: (req, res) => {},
};
