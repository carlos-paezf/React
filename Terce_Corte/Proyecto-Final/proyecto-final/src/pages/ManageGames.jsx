import React from 'react'
import { useState } from 'react'
import { helperInput } from '../helpers/operations'

const ManageGames = () => {

    const [data, setData] = useState({
        name: '',
        description: '',
        genres: '',
        size_mb: '',
        version: '',
        release_date: '',
        developer: '',
        editor: '',
        classification_esrb: '',
        price: '',
        discount_percent: '',
        minimum_requirements: '',
        recommended_requirements: '',
        screenshot: ''
    })

    const { 
        name, description, genres, 
        size_mb, version, release_date, 
        developer, editor, classification_esrb, 
        price, discount_percent,
        minimum_requirements, recommended_requirements, screenshot
    } = data

    const { handleChange } = helperInput(data, setData)
    

    const handleNewGame = (e) => {
        e.preventDefault()
    }
    

    return (
        <div className="main">
            <div>Games posted by me</div>
            <div className="new-game">
                <h3>Publish a new game</h3>
                <form onSubmit={handleNewGame}>
                    <div className="my-5">
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputName" name="name" value={name} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Name</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputDescription" name="description" value={description} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Description</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputGenres" name="genres" value={genres} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Genres</label>
                        </div>
                    </div>

                    <div className="my-5">
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputSizeMB" name="size_mb" value={size_mb} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Size en MB</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputVersion" name="version" value={version} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Version</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputReleaseDate" name="release_date" value={release_date} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Release Date</label>
                        </div>
                    </div>

                    <div className="my-5">
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputDeveloper" name="developer" value={developer} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Developer</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputEditor" name="editor" value={editor} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Editor</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputClassificationESRB" name="classification_esrb" value={classification_esrb} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Classification ESRB</label>
                        </div>
                    </div>

                    <div className="my-5">
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputPrice" name="price" value={price} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Price</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputDiscountPercent" name="discount_percent" value={discount_percent} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Discount Percent</label>
                        </div>
                    </div>

                    <div className="my-5">
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputMinimumRequirements" name="minimum_requirements" value={minimum_requirements} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Minimum Requirements</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputRecommendedRequirements" name="recommended_requirements" value={recommended_requirements} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Recommended Requirements</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="floatingInputScreenshot" name="screenshot" value={screenshot} onChange={handleChange} placeholder=" " />
                            <label className="placeholder">Screenshot</label>
                        </div>
                    </div>

                    <button className="btn btn-outline-success">Publish a new game</button>
                </form>
            </div>
        </div>
    )
}

export default ManageGames
