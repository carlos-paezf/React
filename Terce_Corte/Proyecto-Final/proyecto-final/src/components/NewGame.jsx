import React, { useState } from 'react'
import FormGame from './FormGame'

export const NewGame = () => {

    const [data, setData] = useState({
        name: '',
        description: '',
        genres: '',
        size_mb: '',
        version: '',
        release_date: '',
        developer: '',
        editor: '',
        classification_esrb: '',
        price: '',
        discount_percent: '',
        discount_date: '',
        screenshotURLs: ''
    })

    const [minimumRequirements, setMinimumRequirements] = useState({
        m_processor: '',
        m_os: '',
        m_ram: '',
        m_gpu: ''
    })

    const [recommendedRequirements, setRecommendedRequirements] = useState({
        r_processor: '',
        r_os: '',
        r_ram: '',
        r_gpu: ''
    })

    const [hidden, setHidden] = useState(true)

    return (
        <div>
            <div className='admin-title' onClick={() => setHidden(!hidden)}>
                <h3>Publish a new game</h3>
                <i className={hidden ? "bi bi-chevron-down animate__animated animate__pulse" : "bi bi-chevron-up animate__animated animate__pulse"}></i>
            </div>
            <div className={hidden ? 'hidden animate__animated animate__fadeOut' : ''}>
                <FormGame data={data} setData={setData} minimumRequirements={minimumRequirements} setMinimumRequirements={setMinimumRequirements} recommendedRequirements={recommendedRequirements} setRecommendedRequirements={setRecommendedRequirements} />
            </div>
        </div>
    )
}
