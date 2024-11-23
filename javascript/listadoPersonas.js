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
				// Si está inactivo, interrumpe la función
				if (DOM.ediciones[fila].className.includes("inactivo")) return;

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
	// Eventos - Inputs
	DOM.inputsListado.forEach((inputListado, i) => {
		inputListado.addEventListener("input", () => {
			// Averigua la fila
			const fila = Math.floor(i / 4);

			// Averigua si todos los campos tienen un valor
			let camposCompletos = true;
			for (let campo = 0; campo < 4; campo++) {
				const input = DOM.inputsListado[fila * 4 + campo];
				if (!input.value) camposCompletos = false;
			}

			// Activa o inactiva el ícono de confirmar
			camposCompletos
				? DOM.ediciones[fila].classList.remove("inactivo") // activo
				: DOM.ediciones[fila].classList.add("inactivo"); // inactivo

			// Largo máximo de los inputs
			inputListado.value=inputListado.value.slice(0,20)
		});
	});
});
