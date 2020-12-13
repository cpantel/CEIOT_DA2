El siguiente procedimiento se ha comprobado en una máquina virtual Ubuntu 2020.4. con al menos 10 GB de disco y 2 GB de RAM, mejor 2.5 GB para el navegador.

Instalación de las dependencias
===============================

Docker
------

Instrucciones basadas en https://docs.docker.com/install/linux/docker-ce/ubuntu


`sudo apt remove docker docker-engine docker.io containerd runc`

`sudo apt update`

`sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common`

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

`sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs)  stable"`

`sudo apt update`

`sudo apt install docker-ce docker-ce-cli containerd.io docker-compose`

`sudo addgroup "$USER" docker`

Controlar la correcta instalación con 

`docker --version`

~ 20

`docker-compose --version`

~ 1.25

Reiniciar la sesión

Node
----

Instrucciones basadas en https://github.com/nodesource/distributions/blob/master/README.md


`curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`

`sudo apt install -y nodejs`


Git
---

`sudo apt install git`


Instalación del sistema
=======================

`git clone https://github.com/cpantel/CEIOT_DA2.git`

`cd CEIOT_DA2`

El siguiente comando construirá las imágenes. La primera vez que se ejecute, la base de datos configurará y cargará los datos que hayan en backend/dbsetup.sql.

`./run.sh`

Esperar al mensaje:

_frontend  | : Compiled successfully._

Abrir con un navegador la URL localhost:4200

Presentará la lista de dispositivos.

Al seleccionar un dispositivo, mostrará la medición del sensor asociado, junto a las opciones de abrir o cerrar la electroválvula correspondiente, ver todas la mediciones o ver todos los riegos.


Si se ejecuta el comando ./simulate_activity.sh y a la vez se visualiza el primer sensor, se podrá ver como éste se va ajustando a las nuevas mediciones.

En el listado de riegos, se puede ver el estado (booleano transformado por un custom pipe en "abierta" y "cerrada") y pasando por encima de cada entrada el cursor cambia de color para representar el mismo semárforo que el sensor (utilizando una directiva de atributo).

Con el siguiente comando se puede agregar una medición, modificando el identificador de dispositivo en la URL para seleccionar un dispositivo distinto y el campo valor del body para distintos valores:

curl --location --request POST 'http://localhost:8080/api/dispositivo/1/medicion' \
--header 'Content-Type: application/json' \
--data-raw '{
 "valor":62
}'






TODO
====

* Normalizar nombres de parámetros (idDisp vs dispId)
* Agregar demoras en el backend para que se vea el comportamiento en el frontend ante demoras.
* Escuchar en la interfaz del host para poder usar un navegador externo a la máquina virtual.
* Diseñar un simulador más complejo que abra y cierre las electroválvulas según las mediciones.


Fallas conocidas
================

* Falta manejo de errores en el frontend
* No se está usando docker secrets ni .env para las credenciales.
* Frágil esquema de nombres.
* Hay vulnerabilidades de seguridad en los componentes utilizados
