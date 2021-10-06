import React from 'react'
import { Link } from 'react-router-dom'

const CardsEpisodes = ({ episodes = [] }) => {
    return (
        <div className="row">
            {
                episodes.map(e =>
                    <div key={e.id} className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-header">
                                <h2>{e.name}</h2>
                            </div>
                            <div className="card-body">
                                <div className="card-text">
                                    <p>{e.episode}</p>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to={`/episode/${e.id}`} className="btn btn-outline-primary">
                                    More Info
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CardsEpisodes
