"use strict";

window.addEventListener("load", () => {
	// Variables
	let DOM = {
		listado: document.querySelectorAll("table #listado"),
		ids: document.querySelectorAll("#listado .id"),
		eliminars: document.querySelectorAll("#listado .eliminar i"),
		peliId: document.querySelector("#agregar select[name='peliId']"),
		agregar: document.querySelector("#agregar .confirmar i"),
	};
	const personaId = document.querySelector("#datosPersona #personaId").innerHTML;

	// Eventos - Agregar
	if (DOM.agregar)
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
	if (DOM.peliId)
		DOM.peliId.addEventListener("input", () => {
			// Activa o inactiva el ícono de confirmar
			DOM.peliId.value
				? DOM.agregar.classList.remove("inactivo") // activo
				: DOM.agregar.classList.add("inactivo"); // inactivo
		});
	// Eventos - Eliminar
	DOM.eliminars.forEach((eliminar, fila) => {
		eliminar.addEventListener("click", async () => {
			// Obtiene los valores
			const datos = "/?personaId=" + personaId + "&peliId=" + DOM.ids[fila].innerHTML;

			// Actualiza la info
			DOM.listado[fila].classList.add("ocultar");
			await fetch("/api/" + rutas.eliminar + datos);

			// Fin - si la opción de alta estaba oculta por haber alcanzado el máximo, recarga la vista
			if (!DOM.agregar) return location.reload();
		});
	});
});

// Variables
const rutas = {
	agregar: "agrega-relacion-persona-pelicula",
	eliminar: "elimina-relacion-persona-pelicula",
};
