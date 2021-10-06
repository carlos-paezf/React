import React from 'react'
import { Link } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'
import Loading from './Loading'

const GoCharacter = ({ url }) => {
    const [results, loading] = useAxios(url)

    return (
        <>
            {
                !loading
                    ? <p>
                        <Link to={`/character/${results.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                            {results.name}
                        </Link>
                    </p>
                    : <Loading />
            }
        </>
    )
}

export default GoCharacter
