import React, { useState } from 'react'
import CardsCharacters from '../components/CardsCharacters'
import Pagination from '../components/Pagination'
import { useAxios } from '../hooks/useAxios'
import Loading from '../components/Loading'


const Characters = ({ history }) => {
    const [url, setUrl] = useState("/character")
    const [results, loading, info] = useAxios(url)
    const [input, setInput] = useState('')

    const onPrevious = () => setUrl(info.prev)
    const onNext = () => setUrl(info.next)
    const handleBack = () => history.goBack()

    const handleChange = (e) => {
        setInput(e.target.value)
        // e.preventDefault()
        // setUrl(`/character/?name=${input}`)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        setUrl(`/character/?name=${input}`)
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="col-md-1 my-2">
                        <button className="btn btn-dark my-3 px-3" onClick={handleBack}>Go Back</button>
                    </div>
                    <div className="col-md-7 my-3">
                        <h1>&nbsp;Characters</h1>
                    </div>
                    <div className="col-md-4 my-3">
                        <form class="d-flex">
                            <input className="form-control" type="search" placeholder="Search character by name" aria-label="Search" value={input} onChange={handleChange} />
                            <button className="btn btn-outline-success" onClick={handleSearch}>Search</button>
                        </form>
                    </div>
                </div>
                <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
                {
                    !loading
                        ? <CardsCharacters characters={results} />
                        : <Loading />
                }
            </div>
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        </>
    )
}

export default Characters
