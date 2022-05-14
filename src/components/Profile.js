import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'
import classes from './Logged.module.css'

function Profile() {

    const { logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/', { replace: true })
    }

    return (
        <div className={classes.profile}>
            <div>Welcome King, This is your profile...</div>
            <Link to='/change'>Change Password</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Profile