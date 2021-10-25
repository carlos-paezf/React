# Proyecto Final

## Narrativa

La plataforma de videojuegos ***FFF***, requiere saber cuáles son los títulos que tiene asociado un jugador, igualmente se desea saber cuándo ha iniciado sesión para alguno de ellos, se requiere una aplicación que registre el inicio de sesión y la selección de cada uno de los juegos, con lo cual se mostrará un reporte del uso promedio de cada uno de los juegos al mes.

Se manejan los roles de:

- *Jugador*: Puede iniciar sesión, seleccionar un juego, lanzar la partida (debe preguntar si desea iniciar una nueva o continuar desde la última guardada), y cerrar sesión.
- *Administrador*: Puede iniciar sesión, crear un título de juego nuevo, ver reporte de uso (de más usado y menos usado).

Los datos del juego son:

- Nombre
- Tamaño
- Tipo de juego (competencia, aventura, role, ...)
- Conjunto de mínimo 3 imágenes

Los datos que se registra un nuevo jugador son:

- Nombres
- Apellidos
- Tipo de Documento
- Documento
- Tarjeta de crédito

Lo  más importante es que el jugador puede seleccionar los juegos que desea comprar.

### Aclaraciones

- El aplicativo debe tener un conjunto de estilos creado por el estudiante
- Las revisiones o sustentaciones son individuales.

|Ítem|Calificación|
|----|------------|
|Funcionalidad del aplicativo desplegado (login, módulo funcional de ventas, CRUD's de funcionalidades)|1.3|
|Reportes|0.8|
|Sustentación (conocimiento, manejo y modificación de la aplicación) y documentación (código, arquitectura y aplicación)|1.7|
|Look & Feel (diseño, colores, logo)|1.2|

## Creación del proyecto

```cmd
create-react-app proyecto-final --template cra-template-pwa
```
