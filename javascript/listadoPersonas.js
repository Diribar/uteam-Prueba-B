"use strict";

window.addEventListener("load", () => {
	let DOM = {
		listado: document.querySelector("table .listado"),
		agregar: document.querySelector("table .agregar"),
	};
	DOM = {
		...DOM,
		// Listado - campos
		ids: listado.querySelectorAll(".id"),
		nombres: listado.querySelectorAll("input[name='nombre']"),
		apellidos: listado.querySelectorAll("input[name='apellido']"),
		fechasCumple: listado.querySelectorAll("input[name='fechaCumple']"),
		tieneSeguros: listado.querySelectorAll("select[name='tieneSeguros']"),

		// Listado - íconos
		ediciones: listado.querySelectorAll(".edicion"),
		eliminars: listado.querySelectorAll(".eliminar"),
		listadoPelis: listado.querySelectorAll(".listadoPeliculas"),

		// Agregar - campos
		nombre: agregar.querySelector("input[name='nombre']"),
		apellido: agregar.querySelector("input[name='apellido']"),
		fechaCumple: agregar.querySelector("input[name='fechaCumple']"),
		tieneSeguro: agregar.querySelector("select[name='tieneSeguros']"),

		// Agregar - íconos
		confirmar: agregar.querySelector(".confirmar"),
	};
});
