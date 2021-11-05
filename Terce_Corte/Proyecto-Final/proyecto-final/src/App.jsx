import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import { store } from './store/store'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <AppRouter />

                <ToastContainer autoClose={3000} theme='dark' />
            </div>
        </Provider>
    )
}

export default App
