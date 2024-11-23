"use strict";

module.exports = {
	// Listado de personas
	editaPersona: (req, res) => {
		console.log("edita");
		console.log(req.query);
		return res.json()
	},
	eliminaPersona: (req, res) => {
		"elimina";
	},
	agregaPersona: (req, res) => {
		"agrega";
	},

	// Películas por persona
	buscaPersonaPorId: (req, res) => {},
	buscaPersonaPorNombre: (req, res) => {},
	eliminaPeli: (req, res) => {},
	editaPeli: (req, res) => {},
	agregaPeli: (req, res) => {},
};
