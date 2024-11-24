"use strict";
const fs = require("fs");

module.exports = {
	leerJson: (nombre) => {
		const rutaNombre = path.join(__dirname, "./archivosJson/" + nombre + ".json");
		const json = fs.readFileSync(rutaNombre, "utf8");
		const info = JSON.parse(json);
		return info;
	},
	guardaJson: (nombre, info) => {
		const rutaNombre = path.join(__dirname, "./archivosJson/" + nombre + ".json");
		fs.writeFileSync(rutaNombre, JSON.stringify(info), function writeJSON(err) {
			if (err) console.log("Actualiza Rutinas JSON:", err, datos);
			return;
		});
	},
};
