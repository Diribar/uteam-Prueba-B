PROYECTO B

1. La prueba pedía:
	- Desarrollar un REST API basado en arquitectura Microservicio, utilizando Spring Boot, usando Maven o Gradle.
	No conozco esa arquitectura ni Spring Boot, ni Marven ni Gradle. Por eso le consulté a la persona que me envió el trabajo a hacer (Analía) si podía usar una herramienta alternativa, y ante su respuesta afirmativa lo hice usando APIs con Node.js y JavaScript.
	Por supuesto, estoy abierto a aprender nuevas tecnologías, pero estimé que no era atinado dedicarle tiempo a aprenderlas para esta ocasión, demorando mi devolución del trabajo.

	- Generar una estructura de datos In-Memory (a elección). Si bien podía usar una base de datos con Sequelize, por ser un trabajo pequeño y de corto tiempo para codificar, opté por la herramienta json.

2. Para ejecutar esta aplicación, se debe:
	- Tener instalado Node.js
	- Instalar las dependencias de node usadas en esta aplicación. Eso se realiza con el comendo: npm install
	- Ejecutar la aplicación. Eso se realiza con el comando: npm start
	- En el navegador web, usar el siguiente url: localhost. La aplicación redirige a la vista de Listado de Personas

3. La aplicación consta de dos vistas:
	- /listado-de-personas, donde se pueden eliminar o editar los registros;
		- Están ordenados por apellido y luego por nombre
		- Se pasa a la vista de Películas por Persona, con los íconos que están en la última columna
	- /peliculas-por-persona, donde se le pueden agregar películas del catálogo (hasta una cantidad máxima) o eliminarlas del usuario.

4. Se pasa de una vista a la otra con los íconos que hay luego de los listados

5. Particularidades:
	- En la fila 3 del archivo 'app.js' se especifica la cantidad máxima de películas por persona. Arbitrariamente, fue puesta en 5 unidades.
	- No fue pedida la función de alta de películas (sólo se pidió la de alta de películas por persona), así que se agregaron manualmente algunas películas a la base de datos.