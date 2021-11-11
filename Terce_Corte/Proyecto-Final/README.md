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
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

...
const db = getFirestore(app)
const googleAuthProvider = new GoogleAuthProvider() 
const auth = getAuth(app)

export { db, googleAuthProvider, auth }
```

Dentro de la consola de Firebase, en la sección de ***Authentication***, establecemos que como Proveedores de acceso sean ***Google*** y ***Correo electrónico/contraseña***.

## Definición de los tipos a usar en el proyecto

En la narrativa del proyecto se nombran varias acciones respecto a los *jugadores*, *administradores*, *juegos* e *historial*. En primer medida las acciones que se extrajeron y se establecieron en el archvio `types/types.js` fueron las siguientes (está sujeto a cambios en futuros commits):

```js
export const types = {
    login: '[Auth] login',
    logout: '[Auth] logout',

    userRead: '[User] read',
    
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
import { auth, googleAuthProvider } from "../firebase/config"

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
import { auth } from '../firebase/config'

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
import { auth } from '../firebase/config'

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
import { auth } from '../firebase/config'

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

Por último para la función de logout, se dispone de un pequeño menú emergente sobre el icono del usuario, en el cuál aparecen diversas opciones, y una de ellas es la de logout. Simplemente debe pulsar sobre él y podra cerrar su sesión.

```js
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'

const Sidebar = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        ...
        <li onClick={handleLogout}>Logout</li>
        ...
    )
}
```

## React Toastify

Gracias a la librería de React Toastify, podemos mostrar toast de alerta a nuestros usuarios, con el fin luego de acciones importantes, puedan observar un mensaje de finalización o de error en sus movimientos. Los toast se pueden mostrar de acuerdo al ciclo de vida de las acciones, en algunos casos podemos personalizar los mensajes de error de acuerdo a las excepciones atrapadas, o simplemente dejar un error generalizado. En estos momentos, para los métodos de auth, algunos tienen mensajes toast generalizados luego de esperar por una acción, atrapar una respuesta exitosa u obtener un error. Básicamente se aplican en cada ciclo de vida de las promesas.

Para el siguiente caso, envolvemos el método de `signInWithPopup` dentro de un elemento `toast` con la propiedad `promise`, la acción a ejecutar es el ingreso a la plataforma mediante una cuenta de Google. Mientras dicha acción se ejecuta, aparece un toast diciendo `"Waiting for the choice of an account"`, cuando la promesa retorne una respuesta exitosa, el toast cambiara a decir: `"Success Login with Google"`, y en caso de error obtenemos el mensaje `"Action reject"`.

```js
import { toast } from 'react-toastify'

export const googleLogin = () => {
    return (dispatch) => {
        toast.promise(
            signInWithPopup(auth, googleAuthProvider)
                .then(({ user }) => {
                    dispatch(login(user.uid, user.displayName))
                }),
            {
                pending: 'Waiting for the choice of an account ',
                success: 'Success Login with Google',
                error: 'Action reject'
            }
        )
    }
}
```

Para poder observar dichas toast en nuestra aplicación, debemos instanciar el componente para su renderizado dentro del archivo que especifica su alcance. En este caso, la auth sera en toda la aplicación, por lo tanto, se instancia el componente dentro del archivo `App.jsx`, además de establecer algunas propiedades para su visualización.

```js
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const App = () => {
    return (
        ...
        <ToastContainer autoClose={3000} theme='dark' />
        ...
    )
}
```

## Loading

Había un problema con las rutas una vez logueado: Si la aplicación se recargaba, la aplicación nuevamente validaba al usuario y redirigia siempre al Home. Para solucionarlo se añadieron unas lineas tipo interruptor.

Mientras se carga el estado de login del usuario, se inicia una espera, la cuál termina una vez validado el usuario. Esta espera sirve para aplicar un renderizado condicional, diciendo que si está cargando muestre una pantalla de carga, o de lo contrario renderice los componentes o rutas solicitadas.

```js
const AppRouter = () => {
    ...
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                ...
                setLoading(false)
            } else {
                ...
                setLoading(false)
            }
        })
    }, [dispatch])

    return (
        <>
            {
                loading
                    ? <LoadingScreen />
                    : <Router>
                       ...
                    </Router>
            }
        </>
    )
}
```

## Manipulación de los Usuarios en Firebase

Firebase permite la creación de los usuarios de diversas maneras. Cuando se hace un registro de usuario de manera "manual", ingresando la información en diversos inputs, se pueden capturar datos del usuario para una futura manipulación. Pero, cuando ingresamos con una cuenta de google son muy pocos los datos que se pueden aprovechar para el caso de esta aplicación.

Los campos que he establecido para la aplicación han sido:

- First Name
- Last Name
- Username
- Email
- Password
- Admin

Por medio de la autenticación con Google solo puedo capturar limpiamente son el email y el username. Los demás campos (exceptuando la contraseña) los quiero obtener para poder actualizar el perfil del usuario. Además de que el campo de Admin no se puede manipular desde el registro, sino desde la actualización de los datos, teniendo en cuenta que cumple la función de un rol.

En Firebase no hay una gestión automatizada para los roles de una aplicación, razón por la cual se decide tomar una alternativa al crear una colección que almacene como documentos los uid de los usuarios y que su data sea toda la información a manipular.

### User Reducer

Lo primero es crear un reducer para poder observar los estados de la data. El estado inicial de la data es un objeto vacio, cuando se tome una acción de leer el usuario, se toma una copia de estado y la data cambiara a lo que se le pase por medio del payload:

```js
import { types } from "../types/types"

const initialState = {
    userData: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.userRead : return {
            ...state,
            userData: action.payload
        }
        default: return state
    }
}
```

Importante recordar que los reducers que queremos manejar los debemos instanciar en el store:

```js
const reducers = combineReducers({
    auth: authReducer,
    users: userReducer,
})
```

### User actions

Es hora de establecer que las acciones a realizar con los datos del usuario.

Para tener la información en redux de los datos del usuario creamos la función de `userRead()` la cual define que tipo se acción se va a tomar y cual va a ser la información a entregar al payload.

```js
import { types } from "../types/types"

export const userRead = (data) => {
    return {
        type: types.userRead,
        payload: data
    }
}
```

El método que nos permite capturar los datos del registro para integrarlos a la colección personalizada es el de abajo. Este método se efectua de manera asincrona, pues espera a poder modificar el documento que almacena la información del usuario. La ruta que sigue dicha data es `users/{uid del usuario}` y dentro está la data. Una vez añadida la información al documento, se crear un objeto que toma la data modificada junto al uid, el cual se dispara dentro del método para leer al usuario.

Por medio del método `setDoc()` de Firebase, se puede crear un documento en caso de que no exista, o modificarlo en caso contrario, lo cual es útil para aplicar la doble funcionalidad dentro de nuestro código.

```js
import { setDoc, doc } from "@firebase/firestore"
import { db } from '../firebase/config'
import { types } from "../types/types"
import { toast } from "react-toastify"


export const userCreateOrUpdate = (uid, firstName, lastName, username, email, admin) => {
    return async (dispatch) => {
        const data = {
            firstName,
            lastName,
            username,
            email,
            admin,
            uid
        }
        await setDoc(doc(db, 'users', `${uid}`), data)

        const newData = {
            ...data,
            uid
        }

        dispatch(userRead(newData))
        toast.success('Action success')
    }
}
```

### Carga de los datos del usuario

Dentro del archivo `helpers/loadData.js` hay una función para cargar los datos de los usuarios que están dentro de la colección `users`. Su funcionamiento es simple: es un método asincrono que toma el uid del usuario actual y obtiene la información que hay almacenada del mismo dentro de la colección mediante la función `getDoc()` de Firebase. Posteriormente se regresa la información obtenida.

```js
import { doc, getDoc } from '@firebase/firestore'
import { db } from '../firebase/config'

export const loadUsers = async (uid) => {
    const response = await getDoc(doc(db, `users/${uid}`))
    const data = response.data()
    return data
}
```

### Implementación

Esta aclaración va para los casos de login. El campo de Admin siempre ira en `false`, este se va a modificar dentro de las configuraciones del perfil del usuario.

#### Registro manual

Cuando el usuario se registra manualmente, los datos capturados del formulario de registro harán un dispatch dentro del método `userCreateOrUpdate` para añadirse a un nuevo documento teniendo por nombre el uid del usuario recien creado.

```js
export const register = (firstName, lastName, username, email, password) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                ...
                dispatch(userCreateOrUpdate(user.uid, firstName, lastName, username, email, false))
            })
        ...
    }
}
```

#### Ingreso con Google

Este caso es de cuidado. Cada que ingresamos con una cuenta de Google debemos evaluar si el usuario ya tiene un documento registrado dentro de la colección de `users`, y en caso contrario crearlo. No se puede usar la función de la misma manera que en el caso anterior, puesto que, se estaría reseteando la data del documento una y otra vez cada que se ingresa, evadiendo la persistencia.

La validación se hace mediante la función `loadUsers()`, buscando si hay algún documento que esté asociado con el uid del usuario que esta ingresando a la plataforma. Si encuentra un documento, significa que el usuario ya estaba registrado antes, pero en caso de no encontrar, significa que el usuario ingresa por primera vez por lo que se le debe crear un documento nuevo dentro de la colección. Lo anterior se obtiene bajo la promesa de la función y evaluando la data y la acción correspondiente mediante un Nullish coalescing operator.

```js
export const googleLogin = () => {
    return (dispatch) => {
        
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                ...
                loadUsers(user.uid)
                    .then(userData => {
                        userData 
                            ?? dispatch(userCreateOrUpdate(user.uid, dn[0], dn[2], user.displayName, user.email, false))
                    })
            })
        ...
    }
}
```

#### Cargar los datos del usuario respectivo

Cada que se detecta un cambio en estado de Auth de la aplicación se debe buscar el documento del usuario bajo su uid. Por lo tanto dentro de `AppRouter.jsx`, dentro de la función que detecta el estado de cambio del auth llamamos a la función de `loadUsers()` y la información obtenida la disparamos a redux dentro del método `userRead()`.

```js
useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            dispatch(login(user.uid, user.displayName))
            setLog(true)
            const userData = await loadUsers(user.uid)
            dispatch(userRead(userData))
            setLoading(false)
        } else {
            setLog(false)
            setLoading(false)
        }
    })
}, [dispatch])
```

#### Actualizar los datos

Mientras el usuario ya haya ingresado a la plataforma, puede modificar los datos "básicos" del mismo en una interfaz destinada para lo mismo. Dicha interfaz repite algunos de los campos del formulario de registro, pero también tenemos la opción de convertirnos en admin.

La información de usuario se obtiene gracias a lo almacenado en Redux, y podemos acceder a ello mediante un selector de la librería de `react-redux`. Los estados de los campos son inicialmente los valores especificos de la data obtenida. Para el campo de admin, lo manipulamos con un state diferente, con el que seteamos su valor cada que se presiona el toggle mediante la función de `handleAdmin()`..

Posteriormente, luego de hacer validaciones a los datos ingresados y demás, cuando el formulario sea enviado, se va disparar la función de `userCreateOrUpdate()` con los datos modificados.

```js
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userCreateOrUpdate } from '../actions/user'
import { toast } from 'react-toastify'

const UserSettings = () => {

    const userData = useSelector(state => state.users.userData)
    const dispatch = useDispatch()

    const [data, setData] = useState({
        firstName: `${userData.firstName ?? ''}`,
        lastName: `${userData.lastName ?? ''}`,
        username: `${userData.username ?? ''}`,
        email: `${userData.email ?? ''}`
    })

    const [admin, setAdmin] = useState(userData.admin)

    const { firstName, lastName, username, email } = data

    ...

    const handleAdmin = () => {
        setAdmin(!admin)
    }

    const handleUpdateUser = (e) => {
        ...
        dispatch(userCreateOrUpdate(userData.uid, firstName, lastName, username, email, admin))
    }


    return (
        <div className='main'>
            <div className="user-settings">
                ...
                <form onSubmit={handleUpdateUser} className="form-user">
                    <div className="form-floating">
                        <input type="text" className="form-control input my-3 textfield" id="floatingInputFirstName" name="firstName" value={firstName} onChange={handleChange} autoComplete="off" placeholder=" " />
                        <label className="placeholder">First Name</label>
                    </div>
                    ...
                    <div className="admin">
                        <input type="checkbox" id="toggle" className="offscreen" checked={admin} name="admin" value={admin} onChange={handleAdmin} />
                        <label htmlFor="toggle" className="switch"></label>
                        <p>Be a content manager</p>
                    </div>
                    <button className="my-3 btn btn-lg btn-dark" type="submit">Update Data</button>
                </form>
            </div>
        </div>
    )
}

export default UserSettings
```
