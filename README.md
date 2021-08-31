# Introduccion-a-Redux

## Stateful vs Stateless
Los componentes no funcionales no manejan estado, solo manejan información y funciones.

Los componentes de clases manejan un estado interno, información y funciones, no hace falta definir las funciones con const simplemente con el nombre de la función ya lo detecta.

## ¿Qúe es Redux, cuándo usarlo y por qué?

Redux es una herramienta de uso libre que nos deja almacenar todo nuestro estado de la aplicación en un solo lugar.

Principios:

* Almacenamiento -> Es para los estados.
* Inmutables -> No se pueden modificar los estados. Solo se crean nuevos.
* Centralizado -> Todo estado está en un lugar.

¿Cuándo usarlo?

Se recomienda usarlo en aplicaciones grandes, donde sea compartida con muchos componentes.

También para compartir información entre componentes.

Estados, no formatos.