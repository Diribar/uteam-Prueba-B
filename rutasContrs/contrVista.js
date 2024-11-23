"use strict";

module.exports = {
	listadoDePersonas: (req, res) => {
		// Obtiene información del archivo 'json'
		const rutaNombre = path.join(__dirname, "../archivosJson/personas.json");
		const json = fs.readFileSync(rutaNombre, "utf8");
		const info = JSON.parse(json);
		const personas = info.map((n) => ({
			id: n.id,
			nombre: n["first-name"],
			apellido: n["last-name"],
			fechaCumple: n.birthdate,
			tieneSeguro: n["has-insurance"],
		}));
		return res.render("listadoPersonas", {personas});
	},
	pelisPorPersona: (req, res) => {
		return res.send("pelisPorPersona")
	},
};
