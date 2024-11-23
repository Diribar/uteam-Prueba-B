"use strict";

window.addEventListener("load", () => {
	// Variables
	let DOM={
		agregar: document.querySelector("#agregar")
	}


	// Eventos - Agregar
	DOM.agregar.addEventListener("click", async () => {
		// Si está inactivo, interrumpe la función
		if (DOM.agregar.className.includes("inactivo")) return;
		DOM.agregar.classList.add("inactivo");

		// Obtiene los valores
		const fila = DOM.inputs.length / 4 - 1;
		let datos = "";
		for (let campo = 0; campo < 4; campo++) {
			const input = DOM.inputs[fila * 4 + campo];
			if (!input.value) return;
			datos += (!datos ? "/?" : "&") + input.name + "=" + input.value;
		}

		await fetch("/api/" + rutas.agregar + datos);
		location.reload();
	});

});

const rutas = {
	agregar: "agrega-pelicula",
	eliminar: "elimina-pelicula",
};
