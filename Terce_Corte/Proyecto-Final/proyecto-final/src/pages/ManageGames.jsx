/* import React from 'react'
import { useState } from 'react'
import { helperInput } from '../helpers/operations'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { gameCreate } from '../actions/games'

const ManageGames = () => {

    const dispatch = useDispatch()

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
        discount_date: '',
        screenshotURLs: ''
    })

    const [minimumRequirements, setMinimumRequirements] = useState({
        m_processor: '',
        m_os: '',
        m_ram: '',
        m_gpu: ''
    })

    const [recommendedRequirements, setRecommendedRequirements] = useState({
        r_processor: '',
        r_os: '',
        r_ram: '',
        r_gpu: ''
    })

    const {
        name, description, genres,
        size_mb, version, release_date,
        developer, editor, classification_esrb,
        price, discount_percent, discount_date,
        screenshotURLs
    } = data

    const { m_processor, m_os, m_ram, m_gpu } = minimumRequirements

    const { r_processor, r_os, r_ram, r_gpu } = recommendedRequirements

    const [slide, setSlide] = useState(0)

    const handlePrev = () => {
        setSlide(n => n - 1)
    }

    const handleNext = () => {
        setSlide(n => n + 1)
    }

    const { handleChange: handleChangeData } = helperInput(data, setData)
    const { handleChange: handleChangeMinimum } = helperInput(minimumRequirements, setMinimumRequirements)
    const { handleChange: handleChangeRecommend } = helperInput(recommendedRequirements, setRecommendedRequirements)

    const handleNewGame = (e) => {
        e.preventDefault()
        if (name.trim() === '') {
            return toast('Name is empty', { type: 'warning', autoClose: 2000 })
        }
        if (description.trim() === '') {
            return toast('Description is empty', { type: 'warning', autoClose: 2000 })
        }
        if (genres.trim() === '') {
            return toast('Genres is empty', { type: 'warning', autoClose: 2000 })
        }
        if (size_mb.trim() === '' || size_mb === 0) {
            return toast('Size is empty', { type: 'warning', autoClose: 2000 })
        }
        if (version.trim() === '') {
            return toast('Version is empty', { type: 'warning', autoClose: 2000 })
        }
        if (release_date.trim() === '') {
            return toast('Release Date is empty', { type: 'warning', autoClose: 2000 })
        }
        if (developer.trim() === '') {
            return toast('Developer is empty', { type: 'warning', autoClose: 2000 })
        }
        if (editor.trim() === '') {
            return toast('Editor is empty', { type: 'warning', autoClose: 2000 })
        }
        if (classification_esrb.trim() === '') {
            return toast('Classificatión ESRB is empty', { type: 'warning', autoClose: 2000 })
        }
        if (price.trim() === '') {
            return toast('Price is empty', { type: 'warning', autoClose: 2000 })
        }
        if (discount_percent.trim() === '') {
            return toast('Discount percent is empty', { type: 'warning', autoClose: 2000 })
        }
        if (discount_date.trim() === '') {
            return toast('Discount date is empty', { type: 'warning', autoClose: 2000 })
        }
        if (m_processor.trim() === '') {
            return toast('Minimum Processor is empty', { type: 'warning', autoClose: 2000 })
        }
        if (m_os.trim() === '') {
            return toast('Minimum OS is empty', { type: 'warning', autoClose: 2000 })
        }
        if (m_ram.trim() === '' || m_ram === 0) {
            return toast('Minimum RAM is empty', { type: 'warning', autoClose: 2000 })
        }
        if (m_gpu.trim() === '') {
            return toast('Minimum GPU is empty', { type: 'warning', autoClose: 2000 })
        }
        if (r_processor.trim() === '') {
            return toast('Recommended Processor is empty', { type: 'warning', autoClose: 2000 })
        }
        if (r_os.trim() === '') {
            return toast('Recommended OS is empty', { type: 'warning', autoClose: 2000 })
        }
        if (r_ram.trim() === '' || r_ram === 0) {
            return toast('Recommended RAM is empty', { type: 'warning', autoClose: 2000 })
        }
        if (r_gpu.trim() === '') {
            return toast('Recommended GPU is empty', { type: 'warning', autoClose: 2000 })
        }
        if (screenshotURLs.trim() === '') {
            return toast('Images is empty', { type: 'warning', autoClose: 2000 })
        }

        dispatch(gameCreate(name, description, genres, size_mb, version, release_date, developer, editor, classification_esrb, price, discount_percent, discount_date, minimumRequirements, recommendedRequirements, screenshotURLs))
    }


    return (
        <div className="main">
            <div>Games posted by me</div>
            <div className="new-game">
                <h3>Publish a new game</h3>
                <form onSubmit={handleNewGame} className='g-form'>
                    <div className={(slide === 0) ? "active-form animate__animated animate__fadeIn" : "disable-form"}>
                        <h4>General</h4>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="name" name="name" value={name} onChange={handleChangeData} placeholder=" " />
                            <label className="placeholder">Name</label>
                        </div>
                        <div className="form-floating">
                            <textarea type="textarea" className="form-control input my-3 textfield textarea" id="description" name="description" value={description} onChange={handleChangeData} placeholder=" " />
                            <label className="placeholder">Description</label>
                        </div>
                        <div className="form-floating">
                            <textarea type="text" className="form-control input my-3 textfield" id="genres" name="genres" value={genres} onChange={handleChangeData} placeholder=" " />
                            <label className="placeholder">Genres (Separated with commas)</label>
                        </div>
                        <section className="buttons">
                            <label className="btn btn-dark next" onClick={handleNext}>Next</label>
                        </section>
                    </div>

                    <div className={(slide === 1) ? "active-form animate__animated animate__fadeIn" : "disable-form"}>
                        <h4>Global</h4>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="version" name="version" value={version} onChange={handleChangeData} placeholder=" " />
                            <label className="placeholder">Version</label>
                        </div>
                        <div className="form-floating">
                            <input type="date" className="form-control input my-3 textfield" id="releaseDate" name="release_date" value={release_date} onChange={handleChangeData} placeholder=" " />
                            <label className="placeholder">Release Date</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="form-control input my-3 textfield" id="sizeMB" name="size_mb" value={size_mb} onChange={handleChangeData} placeholder=" " />
                            <label className="placeholder">Size en MB</label>
                        </div>
                        <section className="buttons">
                            <label className="btn btn-dark previous" onClick={handlePrev}>Previous</label>
                            <label className="btn btn-dark next" onClick={handleNext}>Next</label>
                        </section>
                    </div>

                    <div className={(slide === 2) ? "active-form animate__animated animate__fadeIn" : "disable-form"}>
                        <h4>Technical issues</h4>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="developer" name="developer" value={developer} onChange={handleChangeData} placeholder=" " />
                            <label className="placeholder">Developer</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="editor" name="editor" value={editor} onChange={handleChangeData} placeholder=" " />
                            <label className="placeholder">Editor</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="classificationESRB" name="classification_esrb" value={classification_esrb} onChange={handleChangeData} placeholder=" " />
                            <label className="placeholder">Classification ESRB</label>
                        </div>
                        <section className="buttons">
                            <label className="btn btn-dark previous" onClick={handlePrev}>Previous</label>
                            <label className="btn btn-dark next" onClick={handleNext}>Next</label>
                        </section>
                    </div>

                    <div className={(slide === 3) ? "active-form animate__animated animate__fadeIn" : "disable-form"}>
                        <h4>Price</h4>
                        <div className="form-floating">
                            <input type="number" className="form-control input my-3 textfield" id="price" name="price" value={price} onChange={handleChangeData} placeholder=" " />
                            <label className="placeholder">Price</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="form-control input my-3 textfield" id="discountPercent" name="discount_percent" value={discount_percent} onChange={handleChangeData} placeholder=" " min='0' max='100' />
                            <label className="placeholder">Discount Percent</label>
                        </div>
                        <div className="form-floating">
                            <input type="date" className="form-control input my-3 textfield" id="discountDate" name="discount_date" value={discount_date} onChange={handleChangeData} placeholder=" " />
                            <label className="placeholder">Discount end date</label>
                        </div>
                        <section className="buttons">
                            <label className="btn btn-dark previous" onClick={handlePrev}>Previous</label>
                            <label className="btn btn-dark next" onClick={handleNext}>Next</label>
                        </section>
                    </div>

                    <div className={(slide === 4) ? "active-form animate__animated animate__fadeIn" : "disable-form"}>
                        <h4>Minimum Requirements</h4>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="MProcessor" name="m_processor" value={m_processor} onChange={handleChangeMinimum} placeholder=" " />
                            <label className="placeholder">Processor</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="MOS" name="m_os" value={m_os} onChange={handleChangeMinimum} placeholder=" " />
                            <label className="placeholder">OS</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="form-control input my-3 textfield" id="MRam" name="m_ram" value={m_ram} onChange={handleChangeMinimum} placeholder=" " />
                            <label className="placeholder">RAM GB</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="MGPU" name="m_gpu" value={m_gpu} onChange={handleChangeMinimum} placeholder=" " />
                            <label className="placeholder">GPU</label>
                        </div>
                        <section className="buttons">
                            <label className="btn btn-dark previous" onClick={handlePrev}>Previous</label>
                            <label className="btn btn-dark next" onClick={handleNext}>Next</label>
                        </section>
                    </div>

                    <div className={(slide === 5) ? "active-form animate__animated animate__fadeIn" : "disable-form"}>
                        <h4>Recommended Requirements</h4>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="RProcessor" name="r_processor" value={r_processor} onChange={handleChangeRecommend} placeholder=" " />
                            <label className="placeholder">Processor</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="ROS" name="r_os" value={r_os} onChange={handleChangeRecommend} placeholder=" " />
                            <label className="placeholder">OS</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="form-control input my-3 textfield" id="RRam" name="r_ram" value={r_ram} onChange={handleChangeRecommend} placeholder=" " />
                            <label className="placeholder">RAM GB</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control input my-3 textfield" id="RGPU" name="r_gpu" value={r_gpu} onChange={handleChangeRecommend} placeholder=" " />
                            <label className="placeholder">GPU</label>
                        </div>
                        <section className="buttons">
                            <label className="btn btn-dark previous" onClick={handlePrev}>Previous</label>
                            <label className="btn btn-dark next" onClick={handleNext}>Next</label>
                        </section>
                    </div>

                    <div className={(slide === 6) ? "active-form animate__animated animate__fadeIn" : "disable-form"}>
                        <h4>Screnshots</h4>
                        <div className="form-floating">
                            <input type="textarea" className="form-control input my-3 textfield textarea" id="screenshotURLs" name="screenshotURLs" value={screenshotURLs} onChange={handleChangeData} placeholder=" " />
                            <label className="placeholder">Screenshot URL (Separated with commas)</label>
                        </div>
                        <section className="buttons">
                            <label className="btn btn-dark previous" onClick={handlePrev}>Previous</label>
                            <button className="btn btn-outline-success">Publish a new game</button>
                        </section>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ManageGames
 */

import React from 'react'
import { AdminGame } from '../components/AdminGame'
import { NewGame } from '../components/NewGame'

const ManageGames = () => {

    return (
        <div className="main game-admin">
            <NewGame />
            <AdminGame />            
        </div>
    )
}

export default ManageGames
