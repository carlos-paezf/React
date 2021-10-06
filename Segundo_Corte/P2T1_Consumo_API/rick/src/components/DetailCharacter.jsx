import React from 'react'
import { useParams } from 'react-router'
import CharacterScreen from '../pages/CharacterScreen'
import { useAxios } from '../hooks/useAxios'
import Loading from './Loading'

const DetailCharacter = () => {
    const { id } = useParams()
    const url = `https://rickandmortyapi.com/api/character/${id}`

    const [results, loading] = useAxios(url)
    
    return (
        <>
            {
                !loading
                    ? <CharacterScreen {...results} />
                    : <Loading />
            }
        </>
    )
}

export default DetailCharacter
