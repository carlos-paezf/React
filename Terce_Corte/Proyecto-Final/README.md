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

## Primeros pasos del Proyecto

- Creación del proyecto

    ```cmd
    create-react-app proyecto-final --template cra-template-pwa
    ```

- Archivos eliminados

  - App.css
  - App.test.js
  - index.css
  - setupTest.js

- Modificacion de la extensión del archivo `App.js` a `App.jsx`

- Bootstrap

  Dentro del archivo `public/index.html` añadimos el CDN para Bootstrap:

  ```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
  ```

- Comandos para las librerías que se usaran

  - `yarn add react-router-dom`
  - `yarn add redux`
  - `yarn add react-redux`
  - `yarn add firebase`
  - `yarn add react-google-button`
  - `yarn add sass`

- Instalación global de las librerías:
  
  `yarn add react-router-dom redux react-redux firebase react-google-button sass`

## Configuración de Firebase Web v9

Dentro de Firebase Console se creo un proyecto llamado `plataforma-juegos`, dentro de la descripción general del proyecto accedemos a la opción Web (`</>`), registramos la aplicación y copiamos la configuración del SDK que nos muestra, dentro de un archivo personalizado (`firebase/config.js`) para las configuraciones de Firebase de nuestro proyecto.

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1dtQnRbFpnpZFElDO9YUHGL8L4sTfhE0",
  authDomain: "plataforma-juegos.firebaseapp.com",
  projectId: "plataforma-juegos",
  storageBucket: "plataforma-juegos.appspot.com",
  messagingSenderId: "1042370407187",
  appId: "1:1042370407187:web:f33f65d513a51fdabf48e6",
  measurementId: "G-850J5Q0WLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

Además, dentro del mismo archivo también llamamos las librerías de firestore y auth de firebase.

```js
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'

...
const db = getFirestore(app)
const googleAuthProvider = new GoogleAuthProvider() 

export { db, googleAuthProvider }
```

## Definición de los tipos a usar en el proyecto

En la narrativa del proyecto se nombran varias acciones respecto a los *jugadores*, *administradores*, *juegos* e *historial*. En primer medida las acciones que se extrajeron y se establecieron en el archvio `types/types.js` fueron las siguientes (está sujeto a cambios en futuros commits):

```js
export const types = {
    login: '[Auth] login',
    logout: '[Auth] logout',

    gameCreate: '[Game] create',
    gameAdd: '[Game] add',
    gameDelete: '[Game] delete',
    gameRead: '[Game] read',
    gameClean: '[Game] clean',
    gameReport: '[Game] report',

    gameCollectionAdd: '[Game Collection] add',
    gameCollectionDelete: '[Game Collection] delete',
    gameCollectionRead: '[Game Collection] read',

    checkPointAdd: '[Check Point] add',
    checkPointDelete: '[Check Point] delete',
    checkPointRestore: '[Check Point] restore',
    checkPointShow: '[Check Point] show',

    creditCardAdd: '[Credit Card] add',
    creditCardDelete: '[Credit Card] delete',
}
```
