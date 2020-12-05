En una virtual XXXXX basada en XXXX

Instalar las siguientes dependencias


git clone cpantel......




Detalles

DB

la base inicializa la primera vez con lo que haya en dbsetup.sql


TODO
----

* Normalizar los nombres de las rutas de la API
* Normalizar nombres de parámetros (idDisp vs dispId)
* Agregar delay en backend para que se vean los delays
* Que la conexión a la db soporte que la base no esté aun disponible
* Agregar manejo de errores en frontend



Fallas conocidas
-----------------
* No se está usando docker secrets para las credenciales
* Se están usando direcciones hardcodeadas en las url en lugar de hacerlas depender de los nombres dados por docker

