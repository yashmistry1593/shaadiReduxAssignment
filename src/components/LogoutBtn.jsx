import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions'

function LogoutBtn() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('credentials');
        dispatch(logout())
    }

    return (
        <div className="logout-btn">
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default LogoutBtn
