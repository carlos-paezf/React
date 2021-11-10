import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userUpdate } from '../actions/user'
import { toast } from 'react-toastify'

const UserSettings = () => {

    const userData = useSelector(state => state.users.userData)
    const dispatch = useDispatch()

    console.log(userData);

    const [data, setData] = useState({
        firstName: `${userData.firstName}`,
        lastName: `${userData.lastName}`,
        username: `${userData.username ?? 'hi'}`,
        email: `${userData.email}`,
        admin: userData.admin === 0 ? false : true
    })

    const { firstName, lastName, username, email, admin } = data

    const handleChange = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
    }

    const handleAdmin = () => {
        setData({
            admin: !admin
        })
    }

    const handleUpdateUser = (e) => {
        e.preventDefault()
        if (firstName.trim() === '') return 
        if (lastName.trim() === '') return
        if (username.trim() === '') return
        if (email.trim() === '' || !email.trim().includes('@')) return
        dispatch(userUpdate(userData.uid, firstName, lastName, username, email, admin))
        // console.log(data)
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
                        <input type="checkbox" id="toggle" className="offscreen" checked={admin} onChange={handleAdmin} />
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
