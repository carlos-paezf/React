import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false)

    const { email, password } = data

    const handleChange = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
    }

    const handleEmailLogin = (e) => {
        e.preventDefault()
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    

    const handleGoogleLogin = () => {
        console.log('Inicio de sesión con google');
    }

    return (
        <div className="container wrapper-form animate__animated animate__fadeInUp">
            <div className="layer">
                <form onSubmit={handleEmailLogin} className="col-md-6 col-sm-12 h-form">
                    <h1 className="title-form mb-4">Log in to your Account</h1>

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

                    <button className="w-100 my-3 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>

                <div className="line-separation my-3">
                    <span className="line"></span>
                    <span className="line-text">OR</span>
                    <span className="line"></span>
                </div>

                <GoogleButton onClick={handleGoogleLogin} />
            </div>

            <p className="text-muted my-3">Create an Account <Link to="/auth/register">here</Link></p>

            <p className="mt-2 mb-3 text-muted">&copy; 2021–2021</p>
        </div>
    )
}

export default LoginScreen
