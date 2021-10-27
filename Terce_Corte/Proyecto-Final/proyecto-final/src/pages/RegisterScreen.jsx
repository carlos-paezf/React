import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { firstName, lastName, email, password, confirmPassword } = data

    const handleChange = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    return (
        <div className="container wrapper-form animate__animated animate__fadeInUp">
            <div className="layer">
                <form onSubmit={handleRegister} className="col-md-6 col-sm-12 h-form">
                    <h1 className="title-form mb-4">Create an Account</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control input my-3" id="floatingInput" name="firstName" value={firstName} onChange={handleChange} autoComplete="off" />
                        <label className="input-label" htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control input my-3" id="floatingInput" name="lastName" value={lastName} onChange={handleChange} autoComplete="off" />
                        <label className="input-label" htmlFor="floatingInput">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control input my-3" id="floatingInput" name="email" value={email} onChange={handleChange} autoComplete="off" />
                        <label className="input-label" htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating group my-3">
                        <input type={showPassword ? "text" : "password"} className="form-control input" id="floatingPassword" name="password" value={password} onChange={handleChange} autoComplete="off" />
                        <label className="input-label" htmlFor="floatingPassword">Password</label>
                        <button className="password-revealer" onClick={handleShowPassword}>
                            {
                                showPassword
                                    ? <i class="bi bi-eye-slash"></i>
                                    : <i class="bi bi-eye"></i>
                            }
                        </button>
                    </div>
                    <div className="form-floating group my-3">
                        <input type={showConfirmPassword ? "text" : "password"} className="form-control input" id="floatingPassword" name="confirmPassword" value={confirmPassword} onChange={handleChange} autoComplete="off" />
                        <label className="input-label" htmlFor="floatingPassword">Confirm Password</label>
                        <button className="password-revealer" onClick={handleShowConfirmPassword}>
                            {
                                showConfirmPassword
                                    ? <i class="bi bi-eye-slash"></i>
                                    : <i class="bi bi-eye"></i>
                            }
                        </button>
                    </div>

                    <button className="w-100 my-3 btn btn-lg btn-primary" type="submit">Register</button>
                </form>
            </div>

            <p className="text-muted my-3">Log in an Account <Link to="/auth/login">here</Link></p>

            <p className="mt-2 mb-3 text-muted">&copy; 2021–2021</p>
        </div>
    )
}

export default RegisterScreen
