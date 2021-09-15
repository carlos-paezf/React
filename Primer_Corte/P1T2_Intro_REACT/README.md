# Proyectos en React

## React Router

Ingresar a la documentación de la página [REACT TRAINING / REACT ROUTER](https://reactrouter.com/web/guides/quick-start). Accedemos a instalar el paquete `react-router-dom` con el siguiente comando:

`npm install react-router-dom`

En el proyecto `maps-router` hacemos uso de dicha librería para la navegación en nuestra página, en su primer uso importamos los siguientes componentes en `App.jsx`

```js
import { HashRouter, Switch, Route } from 'react-router-dom'
```

Para navegar entre múltiples paginas (aún desde la URL), la estructura general es la siguiente:

```js
<HashRouter>
     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/car" component={Car} />
        <Route path="/car/:id" component={CarDetail} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NOTFound} />
    </Switch>
</HashRouter>
```

Para mostrar un id que se pasa por parámetro ingresamos los siguiente:

```js
import { useParams } from 'react-router'

const Component = () => {
    let { id } = useParams()

    return <span>{ id }</span>
}
```
