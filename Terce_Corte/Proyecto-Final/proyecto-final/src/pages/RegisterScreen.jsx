import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions/auth'
import { toast } from 'react-toastify'

const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { firstName, lastName, username, email, password, confirmPassword } = data

    const handleChange = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        if (firstName.trim() === '') {
            return toast('This first name is empty', {type: 'warning', autoClose: 2000})
        }
        if (lastName.trim() === '') {
            return toast('This last name is empty', {type: 'warning', autoClose: 2000})
        }

        if (username.trim() === '') {
            return toast('This username is empty', {type: 'warning', autoClose: 2000})
        }

        if (email.trim() === '' || !email.trim().includes('@')) {
            return toast('Invalid Email', {type: 'warning', autoClose: 2000})
        }
        if (password.trim().length < 8) {
            return toast('Password very small', {type: 'warning', autoClose: 2000})
        }
        else {
            if (password.trim() !== confirmPassword.trim()) {
                return toast('Passwords do not match', {type: 'warning', autoClose: 2000})
            }
        }
        dispatch(register(firstName, lastName, username, email, password))
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    return (
        <div className="wrapper-form animate__animated animate__fadeIn">
            <div className="layer animate__animated animate__fadeIn">
                <form onSubmit={handleRegister} className="col-md-6 col-sm-12 h-form">
                    <h1 className="title-form mb-4"><i className="bi bi-bezier2"></i> Create an Account</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control input my-3 textfield" id="floatingInputFirstName" name="firstName" value={firstName} onChange={handleChange} placeholder=" " />
                        <label className="placeholder">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control input my-3 textfield" id="floatingInputLastName" name="lastName" value={lastName} onChange={handleChange} placeholder=" " />
                        <label className="placeholder">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control input my-3 textfield" id="floatingInputUsername" name="username" value={username} onChange={handleChange} placeholder=" " />
                        <label className="placeholder">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control input my-3 textfield" id="floatingInputEmail" name="email" value={email} onChange={handleChange} placeholder=" " />
                        <label className="placeholder" htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating group my-3">
                        <input type={showPassword ? "text" : "password"} className="form-control input textfield" id="floatingPassword" name="password" value={password} onChange={handleChange} autoComplete="off" placeholder=" " />
                        <label className="placeholder" htmlFor="floatingPassword">Password</label>
                        <p className="password-revealer" onClick={handleShowPassword}>
                            {
                                showPassword
                                    ? <i className="bi bi-eye-slash"></i>
                                    : <i className="bi bi-eye"></i>
                            }
                        </p>
                    </div>
                    <div className="form-floating group my-3">
                        <input type={showConfirmPassword ? "text" : "password"} className="form-control input textfield" id="floatingConfirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleChange} autoComplete="off" placeholder=" " />
                        <label className="placeholder" htmlFor="floatingPassword">Confirm Password</label>
                        <p className="password-revealer" onClick={handleShowConfirmPassword}>
                            {
                                showConfirmPassword
                                    ? <i className="bi bi-eye-slash"></i>
                                    : <i className="bi bi-eye"></i>
                            }
                        </p>
                    </div>

                    <button className="w-100 my-3 btn btn-lg btn-primary" type="submit">Register</button>
                </form>
            </div>

            <label className="text-muted my-3 animate__animated animate__fadeInUp">Log in an Account <Link to="/auth/login">here</Link></label>

            <p className="mt-2 mb-3 text-muted animate__animated animate__fadeInUp">&copy; 2021–2021</p>
        </div>
    )
}

export default RegisterScreen
