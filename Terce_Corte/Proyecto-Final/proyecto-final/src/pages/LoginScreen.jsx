import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

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
    
    const handleGoogleLogin = () => {
        console.log('Inicio de sesión con google');
    }

    return (
        <div className="container wrapper-form">
            <form onSubmit={handleEmailLogin} className="col-md-6 col-sm-12 h-form">
                <h1 className="title-form mb-5">Log in to your account</h1>

                <div className="form-floating">
                    <input type="email" className="form-control input my-3" id="floatingInput" name="email" value={email} onChange={handleChange} autoComplete="off" />
                    <label className="input-label" htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control input my-3" id="floatingPassword" name="password" value={password} onChange={handleChange} autoComplete="off" />
                    <label className="input-label" htmlFor="floatingPassword">Password</label>
                </div>

                <button className="w-100 my-3 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>

            <div className="line-separation my-3">
                <span className="line"></span>
                <span className="line-text">OR</span>
                <span className="line"></span>
            </div>

            <GoogleButton onClick={handleGoogleLogin} />

            <p className="text-muted my-3">Create an Account <Link to="/auth/register">here</Link></p>

            <p className="mt-2 mb-3 text-muted">&copy; 2021–2021</p>
        </div>
    )
}

export default LoginScreen
