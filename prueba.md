Desarrollar un REST API basado en arquitectura Microservicio, utilizando Spring Boot. Se debe utilizar una de las siguientes build tools: Maven o Gradle.
Se debe generar una estructura de datos In-Memory (a elección), que soporte el almacenado del siguiente modelo:
Corresponde a una persona con datos básicos y una coleccion de peliculas favoritas:

{
	"id":1,
	"first-name":"pablo",
	"last-name":"lamberti",
	"birthdate":"1987-04-03",
	"has-insurance":false,
	"favourite-movies":[
		{
			"title":"The Lord of the Rings",
			"genre":"fantasy"
		},
		{
			"title":"Pulp Fiction",
			"genre":"action"
		}
	]
}

Se deben crear recursos para las siguientes acciones:

Personas
- Listar todas las personas (debe retornar el listado ordenado por apellido, nombre)
- Modificar una persona (solo se deben modificar los datos enviados. Si un dato no se envia, no se debe modificar)
- Crear una persona
- Eliminar una persona

Películas de Personas
- Mostrar las películas de una persona
- Agregar una película a una persona
- Quitar una película de una persona
- Se debe parametrizar el número máximo de películas por persona. Un valor entero que determina la máxima cantidad de películas que puede tener asociada una persona.

- Buscar una persona por id
- Buscar una persona por nombre

Consideraciones:
- El resultado a enviar debe ser un zip, o subirlo a una cuenta pública de git que solo tenga el src, el archivo de la build tool y el archivo pom.xml de manera que para revisar, se pueda hacer la descarga de las dependencias y el run.
