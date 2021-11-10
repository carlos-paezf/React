import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userCreateOrUpdate } from '../actions/user'
import { toast } from 'react-toastify'

const UserSettings = () => {

    const userData = useSelector(state => state.users.userData)
    const dispatch = useDispatch()

    const [data, setData] = useState({
        firstName: `${userData.firstName ?? ''}`,
        lastName: `${userData.lastName ?? ''}`,
        username: `${userData.username ?? ''}`,
        email: `${userData.email ?? ''}`
    })

    const [admin, setAdmin] = useState(userData.admin)

    const { firstName, lastName, username, email } = data

    const handleChange = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
    }

    const handleAdmin = () => {
        setAdmin(!admin)
    }

    const handleUpdateUser = (e) => {
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
            return toast('This email is empty', {type: 'warning', autoClose: 2000})
        }
        dispatch(userCreateOrUpdate(userData.uid, firstName, lastName, username, email, admin))
        // console.log(data, admin)
    }


    return (
        <div className='main'>
            <div className="user-settings">
                <div className="picture">
                    <h1>Avatar</h1>
                </div>

                <form onSubmit={handleUpdateUser} className="form-user">
                    <div className="form-floating">
                        <input type="text" className="form-control input my-3 textfield" id="floatingInputFirstName" name="firstName" value={firstName} onChange={handleChange} autoComplete="off" placeholder=" " />
                        <label className="placeholder">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control input my-3 textfield" id="floatingInputLastName" name="lastName" value={lastName} onChange={handleChange} autoComplete="off" placeholder=" " />
                        <label className="placeholder">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control input my-3 textfield" id="floatingInputUsername" name="username" value={username} onChange={handleChange} autoComplete="off" placeholder=" " />
                        <label className="placeholder">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control input my-3 textfield" id="floatingInputEmail" name="email" value={email} onChange={handleChange} autoComplete="off" placeholder=" " />
                        <label className="placeholder" htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="admin">
                        <input type="checkbox" id="toggle" className="offscreen" checked={admin} name="admin" value={admin} onChange={handleAdmin} />
                        <label htmlFor="toggle" className="switch"></label>
                        <p>Be a content manager</p>
                    </div>
                    <button className="my-3 btn btn-lg btn-dark" type="submit">Update Data</button>
                </form>
            </div>
        </div>
    )
}

export default UserSettings
