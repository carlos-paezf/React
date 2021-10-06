import { useState, useCallback, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'https://rickandmortyapi.com/api'

export const useAxios = (url) => {
    const [results, setResults] = useState(null)
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState({})

    const fetchData = useCallback(
        async () => {
            setLoading(true)
            const { data } = await axios.get(url)
            if (data.results) {
                setResults(data.results)
            } else {
                setResults(data)
            }
            setInfo(data.info)
            setLoading(false)
        }, [url]
    )

    useEffect(() => {fetchData()}, [fetchData])

    return [results, loading, info]
}