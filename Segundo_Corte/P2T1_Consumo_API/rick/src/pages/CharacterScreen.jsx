import React from 'react'
import { useHistory } from 'react-router'
import GoEpisode from '../components/GoEpisode'

const CharacterScreen = (props) => {

    const { name, status, species, type, gender, origin, location, image, episode } = props

    const history = useHistory()
    const handleBack = () => history.goBack()

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

                <div className="d-flex justify-content-between">
                    <div className="col-md-6">
                        <img className="c-img" loading="lazy" src={image} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="c-label">Status: {status}</h3>
                        <h3 className="c-label">Species: {species}</h3>
                        <h3 className="c-label">Gender: {gender}</h3>
                        {
                            type !== '' && <h3 className="c-label">Type: {type}</h3>
                        }
                        <h3 className="c-label">Origin: {origin.name}</h3>
                        <h3 className="c-label">Location: {location.name}</h3>
                    </div>
                </div>

                <div className="col-md-12">
                    <h3 className="c-label-episode">Episodes: {episode.length}</h3>
                    <div className="c-episodes">
                        {
                            episode.map((e, _) => <GoEpisode key={_} url={e} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterScreen
