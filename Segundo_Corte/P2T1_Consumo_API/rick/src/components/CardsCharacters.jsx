import React from 'react'
import { Link } from 'react-router-dom'

const CardsCharacters = ({ characters = [] }) => {
    return (
        <div className="row">
            {
                characters.map(c =>
                    <div key={c.id} className="col-md-4 mb-3">
                        <div className="card">
                            {
                                c.image && <img src={c.image} className="card-img-top" alt={c.name} />
                            }
                            <div className="card-body">
                                <h5 className="card-title">{c.name}</h5>
                                <div className="card-text">
                                    <p className={c.status === 'Alive' ? "text-success" : c.status === 'Dead' ? "text-danger" : "text-info"}>{c.status}</p>
                                </div>
                                <Link to={`/character/${c.id}`} className="btn btn-primary">More...</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CardsCharacters
