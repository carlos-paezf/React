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

| Ítem                                                                                                                    | Calificación |
| ----------------------------------------------------------------------------------------------------------------------- | ------------ |
| Funcionalidad del aplicativo desplegado (login, módulo funcional de ventas, CRUD's de funcionalidades)                  | 1.3          |
| Reportes                                                                                                                | 0.8          |
| Sustentación (conocimiento, manejo y modificación de la aplicación) y documentación (código, arquitectura y aplicación) | 1.7          |
| Look & Feel (diseño, colores, logo)                                                                                     | 1.2          |

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
  - `yarn add redux-thunk`
  - `yarn add react-toastify`

- Instalación global de las librerías:
  
  `yarn add react-router-dom redux react-redux firebase react-google-button sass redux-thunk react-toastify`

- Animate CSS
  
  El proyecto va a contar con algunas pequeñas animaciones, para lo cual se hace uso la librería Animate CSS, pero añadido mediante su CDN en el archivo `public/index.html`:

  ```html
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  ```

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

Dentro de la consola de Firebase, en la sección de ***Authentication***, establecemos que como Proveedores de acceso sean ***Google*** y ***Correo electrónico/contraseña***.

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

## Auth con Google o con email - contraseña

### authReducer

Lo primero es definir los reducers para la autenticación del usuario dentro del archivo `reducers/authReducers.js`. Tiene por parámetros un variable `state` el cual es un objeto vacio, y otra variable que tiene en cuenta las acciones que se efectuan sobre el estado.

- En caso del que la acción sea de tipo `login` lo que retorna son los elementos dentro del objeto que se pasan en los métodos que manipulan el ingreso.
- Si el tipo es `logout`, retorna un objeto vacio.
- El valor que se pasa por defecto es un estado con los elementos que se encuentren almacenados dentro del mismo.

```js
import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login: return action.payload
        case types.logout: return {}   
        default: return state
    }
}
```

### Store

***Redux*** es una librería independiente a React, pero es muy utilizada en el mismo. Es otra manera de manejar el state de la información utilizando el enfoque del patrón Store, el cual es considerado un banco de la verdad, debido a que es donde se almacena todo lo relacionado al estado de una aplicación. En esta caso se va a usar para enviar dispatch de eventos a diferentes funciones de la aplicación con el fin de manipular el estado de login.

Para configurar Redux creamos un archivo llamado `store/store.js` que contiene el árbol de estado de la aplicación. Como tal, no es un método, es un objeto que se pasa a unos pocos métodos. Para crearlos usamos la función `createStore` de `redux` al cual se le pasan las funciones reductoras (si es una sola función, la pasamos directo, pero, si son varias funciones reductoras, usamos el método `combineReducers()` y pasamos la variable que almacena los reducers combinados al store). En estos momentos solo tengo el reducer para la autenticación, pero se que voy a pasar más reducers dentro de la aplicación.

Hay una aplicación de Chrome llamada **Redux DevTools**, pero para 'activarla' se requiere pasar un enhancer o potenciador que por medio de un `thunk` atrapa una expresión y retrasa su evaluación. Un middleware es una lógica de intercambio de información entre aplicaciones, además de que asiste a una aplicación para interactuar o comunicarse con otras aplicaciones, paquetes de programas, redes, hardware o sistemas operativos. Mediante el middleware de `redux-thunk` vamos a permitir un uso asincrono del dispatch. El middleware registra las acciones distribuidas de los nuevos estados resultantes, mientras el enhancer registra el tiempo que tardan los reductores en procesar cada acción.

```js
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk'


const reducers = combineReducers({
    auth: authReducer
})


const composeEnhancers = (typeof window !== 'undefined' && (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose))


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
```

### Provider

Luego de crear el store, toca proveerlo a toda la aplicación, por lo que en el componente principal usamos que un provider para entregar el store.

```js
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <AppRouter />
            </div>
        </Provider>
    )
}
```

### Métodos para login - logout - register

#### Login

Para cualquiera de los 2 medios que se están usando actualmente para el ingreso de la aplicación, se establece una función que toma el id del usuario junto al nombre para mostrar de manera "pública" y se pasan al estado del reducer de auth, tomando en cuenta que el tipo de acción es de `login`:

```js
export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            id: uid,
            username: displayName
        }
    }
}
```

#### Google Login

Para el ingreso o registro directo mediante Google, se crea una función que hace uso de una ventana emergente para seleccionar el correo de gmail y se obtiene por medio de una promesa el usuario. Dicho usuario *dispara* el método de `login()` con su uid y displayname.

```js
import { signInWithPopup } from "@firebase/auth"
import { googleAuthProvider } from "../firebase/config"

export const googleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => dispatch(login(user.uid, user.displayName)))
    }
}
```

#### Login con Email y Password

Para ingresar con email y contraseña, tomamos ambos parámetros en una función que hace uso de un método de firebase para la verificación del ingreso con email y contraseña, y de nuevo tomamos el usuario que se obtiene mediante promesa para hacer un dispatch al login con los parámetros necesarios.

```js
import { signInWithEmailAndPassword } from "@firebase/auth"

export const emailAndPasswordLogin = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => dispatch(login(user.uid, user.displayName)))
    }
}
```

#### Logout

Para hacer un logout dentro de la aplicación, creamos una función que de manera async espera la respuesta de la función `signOut` de firebase, y dispara al reducer un acción de tipo `logout`.

```js
import { signOut } from "@firebase/auth"

export const logout = () => {
    return async (dispatch) => {
        await signOut(auth)
        dispatch({
            type: types.logout
        })
    }
}
```

#### Register

Por último, pero no menos importante, la función de registro de usuario, solo, para los agentes que no hacen uso de una cuenta de Google. Esta función recibe por parámetros un username, un email y la contraseña. Los 2 últimos se registran en Firestore mediante la función de `createUserWithEmailAndPassword()`, la respuesta de esta función se toma de manera async para esperar una respuesta de la actualización del perfil, también con otro método propio de Firestore `updateProfile()` del que se obtiene un displayname. Posteriormente se dispara nuestra función `login()` con el id y displayname del usuario.

```js
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth"

export const register = (email, username, password) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: username })
                dispatch(login(user.uid, user.displayName))
            })
    }
}
```

## Donde se usan los anteriores métodos

El método para ingresar con una cuenta de Google los usamos en el componente de `LoginScreen.jsx` como método `onClick` del botón que renderiza el botón para ingreso con Google. La función de `handleGoogleLogin()` dispara el método de `googleLogin()`.

```js
import { useDispatch } from 'react-redux'
import { googleLogin } from '../actions/auth'

const LoginScreen = () => {
    const dispatch = useDispatch()
    //...
    const handleGoogleLogin = () => {
        dispatch(googleLogin())
    }

    return (
        ...
        <GoogleButton onClick={handleGoogleLogin} />
        ...
    )
}
```

Para el ingreso mediante un correo externo y contraseña, creamos una función que se pasa a la propiedad `onSubmit` del formulario del login, además de evitar que la página se recargue al momento de enviar el formulario, junto con algunas validaciones para los campos. Dicho método dispara la función de `emailAndPasswordLogin()` con el email y el password. (Por motivos de agilidad no voy a explicar la manera de captura de la información que se ingresa a los input).

```js
import { useDispatch } from 'react-redux'
import { emailAndPasswordLogin } from '../actions/auth'

const LoginScreen = () => {

    const dispatch = useDispatch()
    //...
    const handleEmailLogin = (e) => {
        e.preventDefault()
        if (email.trim() === '' || !email.trim().includes('@')) return
        if (password.trim().length < 8) return
        dispatch(emailAndPasswordLogin(email, password))
    }
    //...

    return (
      ...
      <form onSubmit={handleEmailLogin} className="col-md-6 col-sm-12 h-form">...</form>
      ...
    )
}
```

La función para el registro se emplea en el componente de `RegisterScreen.jsx` y tiene el mismo concepto de aplicación que la función de `handleEmailLogin()`.

```js
import { useDispatch } from 'react-redux'
import { register } from '../actions/auth'

const RegisterScreen = () => {

    const dispatch = useDispatch()
    //...
    const handleRegister = (e) => {
        e.preventDefault()
        let username = `${firstName} ${lastName}`
        if (username.trim() === '') return
        if (firstName.trim() === '' || lastName.trim() === '') return
        if (email.trim() === '' || !email.trim().includes('@')) return
        if (password.trim().length < 8) return
        else {
            if (password.trim() !== confirmPassword.trim()) return
        }
        dispatch(register(email, username, password))
    }
    //...

    return (
        ...
        <form onSubmit={handleRegister} className="col-md-6 col-sm-12 h-form">...</form>
        ...
    )
}
```

Ahora bien para poder ingresar a las rutas privadas luego de hacer el login o register, hacemos un `useEffect()` dentro de `AppRouter.jsx`, para que las rutas se rendericen cada que cambie el estado del logeo. Para saber el estado de cambio de la autenticación usamos la función de firebase `onAuthStateChanged()`.

```js
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { login } from '../actions/auth'

const AppRouter = () => {

    const auth = getAuth()
    const dispatch = useDispatch()

    const [log, setLog] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login(user.uid, user.displayName))
                setLog(true)
            } else {
                setLog(false)
            }
        })
    }, [auth, dispatch])

    return (
        ...
    )
}
```
