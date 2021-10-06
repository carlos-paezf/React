import React from 'react'
import { useHistory } from 'react-router'
import GoCharacter from '../components/GoCharacter'

const EpisodeScreen = (props) => {

    const { name, air_date, episode, characters } = props

    const history = useHistory()
    const handleBack = () => history.goBack()

    console.log(characters)

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between">
                    <div className="col-md-11">
                        <h2>{name}</h2>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-dark mb-3 px-3" onClick={handleBack}>Go Back</button>
                    </div>
                </div>

                <div>
                    <div className="col-md-12">
                        <div className="e-labels">
                            <h3 className="e-label">Air date: {air_date}</h3>
                            <h3 className="e-label">Episode: {episode}</h3>
                        </div>
                    </div>
                    <div className="col-md-12">
                    <h3 className="e-label-character">Characters: { characters.length }</h3>
                        <div className="e-characters">
                                {
                                    characters.map((c, _) => <GoCharacter key={_} url={c} />)
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EpisodeScreen
