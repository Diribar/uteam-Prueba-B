"use strict";
const funciones = require("../funciones.js");

module.exports = {
	// Listado de personas
	editaPersona: (req, res) => {
		// Obtiene los datos
		const datos = req.query;
		const datosGuardar = FN_datosGuardar(datos);

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
		const datosGuardar = FN_datosGuardar(datos);

		// Obtiene el archivo de personas
		let info = funciones.leerJson("personas");

		// Genera un id
		for (let id = 1; id <= info.length + 1; id++) {
			const indice = info.findIndex((n) => n.id == id);
			if (indice == -1) {
				datosGuardar.id = id;
				break;
			}
		}

		// Agrega el elemento y los ordena por su id
		info.push(datosGuardar);
		info.sort((a, b) => a.id - b.id);

		// Guarda la información
		funciones.guardaJson("personas", info);

		// Fin
		return res.json();
	},

	// Películas por persona
	eliminaPeli: (req, res) => {},
	agregaPeli: (req, res) => {


		// Fin
		return res.json()
	},

	// Buscadores
	buscaPersonaPorId: (req, res) => {},
	buscaPersonaPorNombre: (req, res) => {},
};

const FN_datosGuardar = (datos) => ({
	id: datos.id ? Number(datos.id) : null,
	"first-name": datos.nombre.trim(),
	"last-name": datos.apellido.trim(),
	birthdate: datos.fechaCumple,
	"has-insurance": datos.tieneSeguro == "1",
});
