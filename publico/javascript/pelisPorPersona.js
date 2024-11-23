"use strict";

window.addEventListener("load", () => {
	// Variables
	let DOM = {
		peliId: document.querySelector("#agregar select[name='peliId']"),
		agregar: document.querySelector("#agregar .confirmar"),
	};
	const personaId = document.querySelector("#datosPersona #personaId").innerHTML;

	// Eventos - Agregar
	DOM.agregar.addEventListener("click", async () => {
		// Si está inactivo, interrumpe la función
		if (DOM.agregar.className.includes("inactivo")) return;
		DOM.agregar.classList.add("inactivo");

		// Obtiene el valor
		let datos = "/?personaId=" + personaId + "&peliId=" + DOM.peliId.value;

		// Agrega un registro
		await fetch("/api/" + rutas.agregar + datos);
		location.reload();
	});
	// Eventos - Inputs
	DOM.peliId.addEventListener("input", () => {
		// Activa o inactiva el ícono de confirmar
		DOM.peliId.value
			? DOM.agregar.classList.remove("inactivo") // activo
			: DOM.agregar.classList.add("inactivo"); // inactivo

	});
});

const rutas = {
	agregar: "agrega-pelicula",
	eliminar: "elimina-pelicula",
};
