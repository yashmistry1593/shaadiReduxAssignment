import React, { useState } from 'react'
import spinner from '../static-images/spinner.gif'
import { useDispatch } from 'react-redux'
import { login } from '../actions'

const Login = (props) => {
    const [userName, setUserName] = useState('shaadi')
    const [password, setPassword] = useState('123')
    const [isValid, setIsValid] = useState(false)
    const [isAdmin, setIsadmin] = useState(false)
    const [isSubmitted, setIssubmitted] = useState(false)

    const dispatch = useDispatch();

    let errorMessage = ''
    if (isSubmitted) {
        if (!isValid) {
            errorMessage = 'Please Enter the field(s)'
        }
        else if (isAdmin) {
            errorMessage = 'You have successfully Logged in.'
            let credentials = {
                user: `${userName}`,
                pass: `${password}`
            }
            localStorage.setItem('credentials', JSON.stringify(credentials))
            //setTimeout(() => props.hasLogggedIn(true), 2000)
            setTimeout(() => dispatch(login()), 2000)
        }
        else {
            errorMessage = 'You are not an admin.'
        }
    }

    const handleSubmit = (e) => {
        e.persist()
        e.preventDefault()
        setIssubmitted(true)
        let userNameInput = e.target.userName.value;
        let passwordInput = e.target.password.value;
        if (userNameInput !== '' || passwordInput !== '') {
            setIsValid(true)
            userNameInput === userName && passwordInput === password ? setIsadmin(true) : setIsadmin(false)
        }
        else {
            setIsValid(false)
        }
    }
    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="userName">Username : </label>
                    <input type="text" id="userName" name="userName" />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password : </label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="form-field">
                    <button type="submit">Submit</button>
                    {isAdmin && <div className="spinner"><img src={spinner} ></img></div>}
                </div>
                <p className="error-message">{errorMessage} </p>
            </form>
        </div>
    )

}
export default Login
