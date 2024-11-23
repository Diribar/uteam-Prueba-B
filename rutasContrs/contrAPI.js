"use strict";
const funciones = require("../funciones.js");

module.exports = {
	// Listado de personas
	editaPersona: (req, res) => {
		// Obtiene los datos
		const datos = req.query;
		const datosGuardar = {
			id: Number(datos.id),
			"first-name": datos.nombre,
			"last-name": datos.apellido,
			birthdate: datos.fechaCumple,
			"has-insurance": datos.tieneSeguro == "1",
		};

		// Obtiene el archivo de personas
		const info = funciones.leerJson("personas");

		// Busca el índice
		const indice = info.findIndex((n) => n.id == datos.id);

		// Reemplaza el elemento y lo guarda
		info[indice] = datosGuardar;


		// Fin
		return res.json();
	},
	eliminaPersona: (req, res) => {
		console.log(req.query);
		return res.json();
	},
	agregaPersona: (req, res) => {
		console.log(req.query);
		return res.json();
	},

	// Películas por persona
	buscaPersonaPorId: (req, res) => {},
	buscaPersonaPorNombre: (req, res) => {},
	eliminaPeli: (req, res) => {},
	editaPeli: (req, res) => {},
	agregaPeli: (req, res) => {},
};
