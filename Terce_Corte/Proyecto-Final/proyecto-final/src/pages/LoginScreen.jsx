import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { emailAndPasswordLogin, googleLogin } from '../actions/auth'
import { toast } from 'react-toastify'
import { helperInput } from '../helpers/operations'

const LoginScreen = () => {

    const dispatch = useDispatch()

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false)

    const { email, password } = data

    const { handleChange } = helperInput(data, setData) 

    const handleEmailLogin = (e) => {
        e.preventDefault()
        if (email.trim() === '' || !email.trim().includes('@')) {
            return toast('Invalid Email', {type: 'warning', autoClose: 2000})
        }
        if (password.trim().length < 8) {
            return toast('Password very small', {type: 'warning', autoClose: 2000})
        }
        dispatch(emailAndPasswordLogin(email, password))
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    const handleGoogleLogin = () => {
        dispatch(googleLogin())
    }

    return (
        <div className="wrapper-form  animate__animated animate__fadeIn">
            <div className="layer animate__animated animate__fadeIn">
                <form onSubmit={handleEmailLogin} className="col-md-6 col-sm-12 h-form">
                    <h1 className="title-form mb-4"><i className="bi bi-bezier2"></i> Log in to your Account</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control input my-3 textfield" id="floatingInputEmail" name="email" value={email} onChange={handleChange} autoComplete="off" placeholder=" " />
                        <label className="placeholder">Email address</label>
                    </div>
                    <div className="form-floating group my-3">
                        <input type={showPassword ? "text" : "password"} className="form-control input my-3 textfield" id="floatingInputPassword" name="password" value={password} onChange={handleChange} autoComplete="off" placeholder=" " />
                        <label className="placeholder">Password</label>
                        <p className="password-revealer" onClick={handleShowPassword}>
                            {
                                showPassword
                                    ? <i className="bi bi-eye-slash"></i>
                                    : <i className="bi bi-eye"></i>
                            }
                        </p>
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

            <label className="text-muted my-3 animate__animated animate__fadeInUp">Create an Account <Link to="/auth/register">here</Link></label>

            <p className="mt-2 mb-3 text-muted animate__animated animate__fadeInUp">&copy; 2021???2021</p>
        </div>
    )
}

export default LoginScreen
