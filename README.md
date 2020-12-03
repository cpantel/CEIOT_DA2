En una virtual XXXXX basada en XXXX

Instalar las siguientes dependencias


git clone cpantel......




Detalles

DB

la base inicializa la primera vez con lo que haya en dbsetup.sql


TODO

agregar delay en backend para que se vean los delays
que la conexión a la db soporte que la base no esté aun disponible
agregar manejo de errores en frontend



Fallas conocidas

No usar docker secrets para las credenciales

Usar direcciones hardcodeadas en las url en lugar de hacerlas depender de los nombres dados por docker

