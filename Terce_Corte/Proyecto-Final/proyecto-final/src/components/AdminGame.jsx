import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AdminCardGame } from './AdminCardGame'

export const AdminGame = () => {

    const data = useSelector(state => state.games.gameDataByAdmin)

    const [hidden, setHidden] = useState(true)

    return (
        <div>
            <div className='admin-title' onClick={() => setHidden(!hidden)}>
                <h3>Games posted by me</h3>
                <i className={hidden ? "bi bi-chevron-down animate__animated animate__pulse" : "bi bi-chevron-up animate__animated animate__pulse"}></i>
            </div>
            <div className={hidden ? 'hidden animate__animated animate__fadeOut' : 'animate__animated animate__fadeIn wrapper-cards-admin'}>
                {
                    data.map((g, i) => <AdminCardGame key={i} {...g} />)
                }
            </div>
        </div>
    )
}
