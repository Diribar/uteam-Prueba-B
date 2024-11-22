"use strict";

window.addEventListener("load", () => {
	// Variables
	let DOM = {
		listado: document.querySelectorAll("table .listado"),
		agregar: document.querySelector("table .agregar"),
	};
	DOM = {
		...DOM,
		// Listado - campos
		ids: document.querySelectorAll(".listado .id"),
		inputsListado: document.querySelectorAll(".listado .input"),

		// Listado - íconos
		ediciones: document.querySelectorAll(".listado .edicion"),
		eliminars: document.querySelectorAll(".listado .eliminar"),
		listadoPelis: document.querySelectorAll(".listado .listadoPeliculas"),

		// Agregar
		inputsAgregar: DOM.agregar.querySelector("input[name='nombre']"),
		confirmar: DOM.agregar.querySelector(".confirmar"),
	};

	// Eventos
	DOM.ediciones.forEach((edicion, fila) => {
		edicion.addEventListener("click", () => {
			// Edición
			if (edicion.className.includes("fa-pen")) {
				// Habilita la edición
				for (let campo = 0; campo < 4; campo++) DOM.inputsListado[fila * 4 + campo].disabled = false;

				// Cambia el ícono
				DOM.ediciones[fila].classList.replace("fa-pen", "fa-circle-check");
				DOM.ediciones[fila].classList.add("inactivo"); // lo deja inactivo
			}
			// Guarda los cambios
			else {
				// Obtiene los valores
				let datos = "";
				for (let campo = 0; campo < 4; campo++) {
					const input = DOM.inputsListado[fila * 4 + campo];
					if (!input.value) return;
					datos += !datos.length ? "?" : "&";
					datos += input.name + "=" + input.value;
				}
				console.log(datos);

				// Actualiza la info
			}
		});
	});
	DOM;
});
