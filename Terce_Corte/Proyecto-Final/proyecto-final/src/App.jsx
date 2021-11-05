import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
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

export default App
