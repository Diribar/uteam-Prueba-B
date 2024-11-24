"use strict";
const funciones = require("../funciones.js");

module.exports = {
	// Listado de personas
	editaPersona: (req, res) => {
		// Obtiene los datos
		const datos = req.query;
		const datosGuardar = FN.datosGuardar(datos);

		// Obtiene el archivo de personas
		const info = funciones.leerJson("personas");

		// Busca el índice
		const indice = info.findIndex((n) => n.id == datos.id);

		// Reemplaza el elemento y lo guarda
		info[indice] = datosGuardar;
		funciones.guardaJson("personas", info);

		// Fin
		return res.json();
	},
	eliminaPersona: (req, res) => {
		// Variables
		const {id} = req.query;
		let info;

		// Quita la relación persona-película
		info = funciones.leerJson("persPelis"); // obtiene el archivo de persPelis
		info = info.filter((n) => n.personaId != id); // quita los registros del usuario
		funciones.guardaJson("persPelis", info); // guarda la info

		// Quita la persona
		info = funciones.leerJson("personas"); // obtiene el archivo de personas
		info = info.filter((n) => n.id != id); // quita el usuario
		funciones.guardaJson("personas", info); // guarda la info

		// Fin
		return res.json();
	},
	agregaPersona: (req, res) => {
		// Obtiene los datos
		const datos = req.query;
		const datosGuardar = FN.datosGuardar(datos);

		// Obtiene el archivo de personas
		let info = funciones.leerJson("personas");

		// Genera un id
		datosGuardar.id = FN.generaUnId(info);

		// Agrega el elemento y los ordena por su id
		info.push(datosGuardar);
		info.sort((a, b) => a.id - b.id);

		// Guarda la información
		funciones.guardaJson("personas", info);

		// Fin
		return res.json();
	},

	// Películas por persona
	eliminaPersPeli: (req, res) => {
		// Variables
		const {personaId, peliId} = req.query;

		// Quita la relación persona-película
		let info = funciones.leerJson("persPelis"); // obtiene el archivo de persPelis
		info = info.filter((n) => n.personaId != personaId || n.peliId != peliId); // quita la relación 'personaId' y 'peliId'
		funciones.guardaJson("persPelis", info); // actualiza la info

		// Fin
		return res.json();
	},
	agregaPersPeli: (req, res) => {
		// Variables
		let datos = {id: null, ...req.query};
		let info = funciones.leerJson("persPelis");
		datos.id = FN.generaUnId(info);
		for (let campo in datos) datos[campo] = Number(datos[campo]);

		// Agrega el elemento y los ordena por su id
		info.push(datos);
		info.sort((a, b) => a.id - b.id);

		// Guarda la información
		funciones.guardaJson("persPelis", info);

		// Fin
		return res.json();
	},

	// Buscadores
	buscaPersonaPorId: (req, res) => {},
	buscaPersonaPorNombre: (req, res) => {},
};

const FN = {
	datosGuardar: (datos) => ({
		id: datos.id ? Number(datos.id) : null,
		"first-name": datos.nombre.trim(),
		"last-name": datos.apellido.trim(),
		birthdate: datos.fechaCumple,
		"has-insurance": datos.tieneSeguro == "1",
	}),
	generaUnId: (info) => {
		for (let id = 1; id <= info.length + 1; id++) {
			const indice = info.findIndex((n) => n.id == id);
			if (indice == -1) return id;
		}
	},
};
