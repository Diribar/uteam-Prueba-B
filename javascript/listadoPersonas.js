"use strict";

window.addEventListener("load", () => {
	let DOM = {
		listado: document.querySelectorAll("table .listado"),
		agregar: document.querySelector("table .agregar"),
	};
	console.log(DOM.listado);

	DOM = {
		...DOM,
		// Listado - campos
		ids: document.querySelectorAll(".listado .id"),
		nombres: document.querySelectorAll(".listado input[name='nombre']"),
		apellidos: document.querySelectorAll(".listado input[name='apellido']"),
		fechasCumple: document.querySelectorAll(".listado input[name='fechaCumple']"),
		tieneSeguros: document.querySelectorAll(".listado select[name='tieneSeguros']"),

		// Listado - íconos
		ediciones: document.querySelectorAll(".listado .edicion"),
		eliminars: document.querySelectorAll(".listado .eliminar"),
		listadoPelis: document.querySelectorAll(".listado .listadoPeliculas"),

		// Agregar - campos
		nombre: DOM.agregar.querySelector("input[name='nombre']"),
		apellido: DOM.agregar.querySelector("input[name='apellido']"),
		fechaCumple: DOM.agregar.querySelector("input[name='fechaCumple']"),
		tieneSeguro: DOM.agregar.querySelector("select[name='tieneSeguros']"),

		// Agregar - íconos
		confirmar: DOM.agregar.querySelector(".confirmar"),
	};

	// Eventos
	DOM.ediciones.forEach((edicion,i)=>{
		edicion.addEventListener("click",()=>{
			console.dir(DOM.listado[i])
			// for (let child of DOM.listado[i])
		})
	})
});
