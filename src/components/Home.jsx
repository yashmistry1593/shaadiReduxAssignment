import React, { useState, useEffect } from 'react'
import Carousel from './carousel/Carousel'
import Login from './Login'
import LogoutBtn from './LogoutBtn'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../actions'

const Home = () => {
    const [isloggedIn, setIsLoggedIn] = useState(false)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('credentials');
        setIsLoggedIn(false)
    }

    useEffect(() => {
        if (localStorage.getItem('credentials') !== null) {
            let credentials = JSON.parse(localStorage.getItem('credentials'))
            credentials.user === "shaadi" && credentials.pass === "123" ? dispatch(login()) : dispatch(logout());
        }
    }, []);

    return (
        <div>
            {isLogged && <LogoutBtn />}
            {isLogged ? <Carousel handleLogout={handleLogout} /> : <Login />}
        </div>
    );
}
export default Home
