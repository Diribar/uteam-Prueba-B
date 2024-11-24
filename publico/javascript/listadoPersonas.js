"use strict";

window.addEventListener("load", () => {
	// Variables
	let DOM = {
		buscadorId: document.querySelector("#buscadorPersonas #buscaPorId"),
		buscadorNombre: document.querySelector("#buscadorPersonas #buscaPorNombre"),
		listado: document.querySelectorAll("table #listado"),
		agregar: document.querySelector("table #agregar"),
	};
	DOM = {
		...DOM,
		// Casos puntuales
		ids: document.querySelectorAll("#listado .id"),
		nombre: document.querySelectorAll("#listado input[name='nombre']"),
		apellido: document.querySelectorAll("#listado input[name='apellido']"),
		inputs: document.querySelectorAll("table .input"),

		// Íconos
		ediciones: document.querySelectorAll("#listado .confirmar.edicion"),
		eliminars: document.querySelectorAll("#listado .eliminar"),
		listadoPelis: document.querySelectorAll("#listado .pelis"),
		agregar: document.querySelector("#agregar .confirmar"),
		confirmar: document.querySelectorAll(".confirmar"),
	};

	// Eventos - Inputs
	DOM.inputs.forEach((input, i) => {
		input.addEventListener("input", () => {
			// Averigua la fila
			const fila = Math.floor(i / 4);

			// Averigua si todos los campos tienen un valor
			let camposCompletos = true;
			for (let campo = 0; campo < 4; campo++) {
				const dato = DOM.inputs[fila * 4 + campo];
				if (!dato.value) camposCompletos = false;
			}

			// Activa o inactiva el ícono de confirmar
			camposCompletos
				? DOM.confirmar[fila].classList.remove("inactivo") // activo
				: DOM.confirmar[fila].classList.add("inactivo"); // inactivo

			// Largo máximo de los inputs
			input.value = input.value.slice(0, 20);
		});
	});
	// Eventos - Edición
	DOM.ediciones.forEach((edicion, fila) => {
		edicion.addEventListener("click", async () => {
			// Edición
			if (edicion.className.includes("fa-pen")) {
				// Habilita la edición
				for (let campo = 0; campo < 4; campo++) DOM.inputs[fila * 4 + campo].disabled = false;

				// Cambia el ícono
				DOM.ediciones[fila].classList.replace("fa-pen", "fa-circle-check");
				DOM.ediciones[fila].classList.add("inactivo"); // lo deja inactivo
			}
			// Guarda los cambios
			else {
				// Si está inactivo, interrumpe la función
				if (DOM.ediciones[fila].className.includes("inactivo")) return;

				// Deshabilita la edición
				for (let campo = 0; campo < 4; campo++) DOM.inputs[fila * 4 + campo].disabled = true;

				// Cambia el ícono
				DOM.ediciones[fila].classList.replace("fa-circle-check", "fa-pen");
				DOM.ediciones[fila].classList.remove("inactivo"); // lo deja activo

				// Obtiene los valores
				let datos = "/?id=" + DOM.ids[fila].innerHTML;
				for (let campo = 0; campo < 4; campo++) {
					const input = DOM.inputs[fila * 4 + campo];
					if (!input.value) return;
					datos += "&" + input.name + "=" + input.value;
				}

				// Actualiza la info
				await fetch("/api/" + rutas.editar + datos);
				location.reload();
			}
		});
	});
	// Eventos - Eliminar
	DOM.eliminars.forEach((eliminar, fila) => {
		eliminar.addEventListener("click", async () => {
			// Obtiene los valores
			const datos = "/?id=" + DOM.ids[fila].innerHTML;

			// Actualiza la info
			DOM.listado[fila].classList.add("ocultar");
			await fetch("/api/" + rutas.eliminar + datos);
		});
	});
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

		// Agrega un registro
		await fetch("/api/" + rutas.agregar + datos);
		location.reload();
	});
	// Eventos - buscadorId
	DOM.buscadorId.addEventListener("input", () => {
		// Obtiene el valor del filtro
		const valor = DOM.buscadorId.value;

		// Revisa el filtro en cada fila
		DOM.ids.forEach((id, fila) => {
			if (valor)
				id.innerHTML.includes(valor)
					? DOM.listado[fila].classList.remove("ocultar") // muestra la fila si el id contiene la info del buscador
					: DOM.listado[fila].classList.add("ocultar");
			// Si el 'inputId' está vacío, muestra todas las filas
			else DOM.listado[fila].classList.remove("ocultar");
		});
	});
	// Eventos - buscadorNombre
	DOM.buscadorNombre.addEventListener("input", () => {
		// Obtiene el valor del filtro
		const valor = DOM.buscadorNombre.value.toLowerCase();

		// Revisa el filtro en cada fila
		DOM.listado.forEach((fila, numero) => {
			if (valor)
				DOM.nombre[numero].value.toLowerCase().includes(valor) || DOM.apellido[numero].value.toLowerCase().includes(valor)
					? fila.classList.remove("ocultar") // muestra la fila si el id contiene la info del buscador
					: fila.classList.add("ocultar");
			// Si el 'inputId' está vacío, muestra todas las filas
			else fila.classList.remove("ocultar");
		});
	});

	// Fin
	return;
});

const rutas = {
	editar: "edita-persona",
	eliminar: "elimina-persona",
	agregar: "agrega-persona",
};
