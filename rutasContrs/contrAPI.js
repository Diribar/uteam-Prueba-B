"use strict";

module.exports = {
	// Listado de personas
	editaPersona: (req, res) => {
		console.log(req.query);
		return res.json()
	},
	eliminaPersona: (req, res) => {
		console.log(req.query);
		return res.json()
	},
	agregaPersona: (req, res) => {
		console.log(req.query);
		return res.json()
	},

	// Películas por persona
	buscaPersonaPorId: (req, res) => {},
	buscaPersonaPorNombre: (req, res) => {},
	eliminaPeli: (req, res) => {},
	editaPeli: (req, res) => {},
	agregaPeli: (req, res) => {},
};
