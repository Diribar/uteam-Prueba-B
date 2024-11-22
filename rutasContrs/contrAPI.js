"use strict";

module.exports = {
	inicio: (req, res) => res.render("vistaGral", {opciones}),
	// Personas
	listadoDePersonas: (req, res) => {},
	buscarPorId: (req, res) => {},
	buscarPorNombre: (req, res) => {},
	crearPersona: (req, res) => {},
	editarPersona: (req, res) => {},
	eliminarPersona: (req, res) => {},

	// Películas
	mostrarPelis: (req, res) => {},
	agregarPeli: (req, res) => {},
	quitarPeli: (req, res) => {},
};
