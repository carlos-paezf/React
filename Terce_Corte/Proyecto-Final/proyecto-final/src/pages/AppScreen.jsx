import React from 'react'
import Sidebar from '../components/Sidebar'
import HomeScreen from './HomeScreen'

const AppScreen = () => {
    return (
        <div className="app-screen">
            <Sidebar />
            <main>
                <HomeScreen />
            </main>
        </div>
    )
}

export default AppScreen
