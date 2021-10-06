import React from 'react'
import { useParams } from 'react-router'
import { useAxios } from '../hooks/useAxios'
import EpisodeScreen from '../pages/EpisodeScreen'
import Loading from './Loading'

const DetailEpisode = () => {
    const { id } = useParams()
    const url = `https://rickandmortyapi.com/api/episode/${id}`

    const [results, loading] = useAxios(url)

    return (
        <>
            {
                !loading
                    ? <EpisodeScreen {...results} />
                    : <Loading />
            }
        </>
    )
}

export default DetailEpisode