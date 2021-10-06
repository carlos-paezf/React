import React from 'react'
import { useAxios } from '../hooks/useAxios'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const GoEpisode = ({ url }) => {
    const [results, loading] = useAxios(url)

    return (
        <>
            {
                !loading
                    ? <p>
                        <Link to={`/episode/${results.id}`} style={{textDecoration: 'none', color: 'white'}}>
                            {results.name}
                        </Link>
                    </p>
                    : <Loading />
            }
        </>
    )
}

export default GoEpisode
